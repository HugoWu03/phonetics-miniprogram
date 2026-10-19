const data = require('../../utils/data');
const audio = require('../../utils/audio');

Page({
  data: {
    p: null,           // 当前音标
    prevSym: '',
    nextSym: '',
    recState: 'idle',  // idle | recording
    recordPath: ''
  },

  onLoad(options) {
    const sym = decodeURIComponent(options.sym || 'iː');
    this.load(sym);
  },

  load(sym) {
    const list = data.phonemes;
    const idx = list.findIndex(p => p.sym === sym);
    if (idx < 0) return;
    const prev = list[(idx - 1 + list.length) % list.length];
    const next = list[(idx + 1) % list.length];
    this.setData({
      p: list[idx],
      prevSym: prev.sym,
      nextSym: next.sym,
      recState: 'idle',
      recordPath: ''
    });
    wx.setNavigationBarTitle({ title: sym + ' 音标详情' });
    // 每个音标共用一个录音管理器
    if (!this.rm) {
      this.rm = audio.createRecorder(this, 'recState');
    }
  },

  onPlayDemo() {
    audio.playDemo(data.audioId(this.data.p.sym));
  },

  onStartRecord() {
    if (this.data.recState === 'recording') {
      this.rm.stop();
    } else {
      this.rm.start({ format: 'mp3', duration: 10000 });
    }
  },

  onPlayRecord() {
    audio.playRecord(this.data.recordPath);
  },

  onPrev() {
    this.load(this.data.prevSym);
  },
  onNext() {
    this.load(this.data.nextSym);
  },

  onExampleDemo(e) {
    // 例词示范：audio/words/{word}.mp3
    audio.playWord(e.currentTarget.dataset.word);
  },

  onShareAppMessage() {
    return { title: '一起来学 48 个国际音标！' };
  }
});
