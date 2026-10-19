const data = require('../../utils/data');
const audio = require('../../utils/audio');

Page({
  data: {
    p: null,
    recState: 'idle',
    recordPath: '',
    history: 0
  },

  onLoad() {
    this.rm = audio.createRecorder(this, 'recState');
    this.next();
    this.setData({ history: wx.getStorageSync('practiceCount') || 0 });
  },

  next() {
    const list = data.phonemes;
    const p = list[Math.floor(Math.random() * list.length)];
    this.setData({ p, recState: 'idle', recordPath: '' });
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

  onDone() {
    const n = (wx.getStorageSync('practiceCount') || 0) + 1;
    wx.setStorageSync('practiceCount', n);
    this.setData({ history: n });
    this.next();
    wx.showToast({ title: '下一个！', icon: 'none' });
  }
});
