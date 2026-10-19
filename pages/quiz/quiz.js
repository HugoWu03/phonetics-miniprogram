const data = require('../../utils/data');
const audio = require('../../utils/audio');

const QUIZ_SIZE = 10;

Page({
  data: {
    mode: 'start',     // start | playing | result
    words: [],         // 本轮题目
    idx: 0,            // 当前题号
    cur: null,
    right: 0,
    wrong: 0,
    best: 0,
    recState: 'idle',
    recordPath: ''
  },

  onLoad() {
    this.rm = audio.createRecorder(this, 'recState');
    this.setData({ best: wx.getStorageSync('quizBest') || 0 });
  },

  start() {
    // 随机抽 QUIZ_SIZE 个词
    const pool = data.quizWords.slice();
    const words = [];
    while (words.length < QUIZ_SIZE && pool.length) {
      words.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }
    this.setData({
      mode: 'playing',
      words,
      idx: 0,
      cur: words[0],
      right: 0,
      wrong: 0,
      recState: 'idle',
      recordPath: ''
    });
  },

  answer(e) {
    const ok = e.currentTarget.dataset.ok === '1';
    const right = this.data.right + (ok ? 1 : 0);
    const wrong = this.data.wrong + (ok ? 0 : 1);
    const idx = this.data.idx + 1;
    if (idx >= this.data.words.length) {
      const score = Math.round(right / this.data.words.length * 100);
      const best = Math.max(score, this.data.best);
      wx.setStorageSync('quizBest', best);
      this.setData({ mode: 'result', right, wrong, best });
    } else {
      this.setData({ idx, cur: this.data.words[idx], right, wrong, recState: 'idle', recordPath: '' });
    }
  },

  onShowIpa() {
    this.setData({ ['cur.showIpa']: true });
  },

  onPlayDemo() {
    audio.playWord(this.data.cur.w);
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

  backHome() {
    this.setData({ mode: 'start' });
  }
});
