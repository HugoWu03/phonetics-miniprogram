# -*- coding: utf-8 -*-
# 用 espeak-ng 按音素直接合成 48 个音标的纯发音音频（替换此前"例词朗读"式示范）。
# 产出：覆盖 audio/{id}.mp3（文件名与原 ASCII 映射一致，代码无需改动）
import ctypes, io, os, subprocess, sys, wave
import espeakng_loader

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(ROOT), 'audio')
try:
    # 优先动态获取 imageio-ffmpeg 自带的 ffmpeg（跨机器可用）
    import imageio_ffmpeg
    FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
except ImportError:
    FFMPEG = os.environ.get('FFMPEG_PATH', 'ffmpeg')  # 回退：环境变量或系统 PATH 中的 ffmpeg

# espeak-ng en-us 音素助记符（与 espeak 发音词典一致）
# 元音=纯音; 辅音统一追加央元音 @（音素+shwa 的经典示范法, 如 p -> "puh"）
PHONEMES = [
    ('ii', 'en-us', 'i:'),    ('i',  'en-us', 'I'),     ('e',  'en-us', 'E'),
    ('ae', 'en-us', 'a'),     ('aa', 'en-us', 'A:'),    ('oo', 'en-us', 'O:'),    ('u',  'en-us', 'U'),     ('uu', 'en-us', 'u:'),
    ('uh', 'en-us', 'V'),     ('er', 'en-us', '3:'),    ('schwa', 'en-us', '@'),
    ('o', 'en', 'Q'),
    ('ei', 'en-us', 'eI'),    ('ai', 'en-us', 'aI'),    ('oi', 'en-us', 'OI'),
    ('ou', 'en-us', 'oU'),    ('au', 'en-us', 'aU'),
    ('ia', 'en-us', 'I @'),   ('ea', 'en-us', 'E @'),   ('ua', 'en-us', 'U @'),
    ('p', 'en-us', 'p @'),   ('b', 'en-us', 'b @'),   ('t', 'en-us', 't @'),  ('d', 'en-us', 'd @'),
    ('k', 'en-us', 'k @'),   ('g', 'en-us', 'g @'),   ('f', 'en-us', 'f @'),  ('v', 'en-us', 'v @'),
    ('th', 'en-us', 'T @'),  ('dh', 'en-us', 'D @'),  ('s', 'en-us', 's @'),  ('z', 'en-us', 'z @'),
    ('sh', 'en-us', 'S @'),  ('zh', 'en-us', 'Z @'),  ('h', 'en-us', 'h @'),  ('r', 'en-us', 'r @'),
    ('ch', 'en-us', 'tS @'), ('dj', 'en-us', 'dZ @'), ('tr', 'en-us', 't r @'),
    ('dr', 'en-us', 'd r @'),('ts', 'en-us', 't s @'),('dz', 'en-us', 'd z @'),
    ('m', 'en-us', 'm @'),   ('n', 'en-us', 'n @'),   ('ng', 'en-us', 'N @'),
    ('l', 'en-us', 'l @'),   ('w', 'en-us', 'w @'),   ('y', 'en-us', 'j @'),
]

RATE = 130  # 稍慢，发音更清晰

lib = ctypes.CDLL(espeakng_loader.get_library_path())
samples = bytearray()

SynthCB = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.POINTER(ctypes.c_short), ctypes.c_int, ctypes.c_void_p)

@SynthCB
def _cb(wav, n, events):
    if wav and n > 0:
        samples.extend(ctypes.string_at(wav, n * 2))
    return 0

def init():
    espeak_OUTPUT_SYNCHRONOUS = 1
    data_path = espeakng_loader.get_data_path().encode('utf-8')
    r = lib.espeak_Initialize(espeak_OUTPUT_SYNCHRONOUS, 0, data_path, 0)
    if r <= 0:
        raise RuntimeError('espeak_Initialize failed: %s' % r)
    lib.espeak_SetSynthCallback(_cb)

def set_voice(name):
    rc = lib.espeak_SetVoiceByName(name.encode('utf-8'))
    if rc != 0:
        raise RuntimeError('SetVoiceByName failed: %s' % name)

def synth_to_wav(mnemonics, voice, speed=RATE):
    del samples[:]
    set_voice(voice)
    # espeak_SetParameter(1=RATE, value, 0)
    lib.espeak_SetParameter(1, speed, 0)
    text = ('[[%s]]' % mnemonics).encode('utf-8')
    buf = ctypes.create_string_buffer(text)
    flags = ctypes.c_uint(0x100)  # espeakPHONEMES: 输入文本为 [[ ]] 包裹的音素助记符
    ident = ctypes.c_uint(0)
    rc = lib.espeak_Synth(buf, len(text), 0, 0, 0, flags, ctypes.byref(ident), None)
    if rc != 0:
        raise RuntimeError('espeak_Synth failed: %s for %r' % (rc, mnemonics))
    pcm = bytes(samples)
    bio = io.BytesIO()
    with wave.open(bio, 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(22050)
        w.writeframes(pcm)
    return bio.getvalue()

def to_mp3(wav_bytes, dst):
    src = dst + '.wav'
    with open(src, 'wb') as f:
        f.write(wav_bytes)
    subprocess.run([FFMPEG, '-y', '-loglevel', 'error', '-i', src,
                    '-b:a', '32k', '-ac', '1', '-ar', '22050', dst], check=True)
    os.remove(src)

def main(only=None):
    init()
    fails = []
    for fid, voice, mnem in PHONEMES:
        if only and fid not in only:
            continue
        try:
            wav = synth_to_wav(mnem, voice)
            if len(wav) < 800:  # <~10ms PCM 说明没合成出声音
                raise RuntimeError('audio too small (%dB)' % len(wav))
            to_mp3(wav, os.path.join(OUT, fid + '.mp3'))
            print('ok', fid, voice, mnem, len(wav), 'B')
        except Exception as e:
            fails.append((fid, str(e)))
    print('done. failed:', len(fails))
    for f, e in fails:
        print('FAILED', f, e)
    return 1 if fails else 0

if __name__ == '__main__':
    only = set(sys.argv[1:]) or None
    sys.exit(main(only))
