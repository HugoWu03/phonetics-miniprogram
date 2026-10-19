# -*- coding: utf-8 -*-
# 批量生成例词/测验词示范音频（微软 Edge 神经语音）
# 产出：audio/words/{w}.mp3
# 注意：48 个音标的纯发音音频由 tools/gen_phoneme_audio.py（espeak-ng）生成，
#       本脚本不再生成音标音频，避免覆盖。
import asyncio, json, os, sys
import edge_tts

VOICE = 'en-US-JennyNeural'
ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(ROOT), 'audio')
WORDS_OUT = os.path.join(OUT, 'words')

def load_manifest():
    with open(os.path.join(os.path.dirname(ROOT), 'audio_manifest.json'), encoding='utf-8') as f:
        return json.load(f)

def build_tasks(m):
    tasks = []  # (path, text, rate)
    seen = set()
    for w in m['quiz']:
        seen.add(w)
    for p in m['phonemes']:
        for w in p['examples']:
            seen.add(w)
    for w in sorted(seen):
        tasks.append((os.path.join(WORDS_OUT, w + '.mp3'), w, '-15%'))
    return tasks

async def gen(path, text, rate, sem):
    if os.path.exists(path) and os.path.getsize(path) > 500:
        return None
    async with sem:
        for i in range(4):
            try:
                c = edge_tts.Communicate(text, VOICE, rate=rate)
                await c.save(path)
                if os.path.getsize(path) > 500:
                    return None
            except Exception as e:
                await asyncio.sleep(1.5 * (i + 1))
        return path

async def main():
    os.makedirs(WORDS_OUT, exist_ok=True)
    tasks = build_tasks(load_manifest())
    print('total tasks:', len(tasks))
    sem = asyncio.Semaphore(8)
    results = await asyncio.gather(*[gen(*t, sem) for t in tasks])
    failed = [r for r in results if r]
    print('done. failed:', len(failed))
    for f in failed:
        print('FAILED:', f)

if __name__ == '__main__':
    asyncio.run(main())
