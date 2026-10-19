const data = require('../../utils/data');

Page({
  data: {
    plan: [],
    checkins: {},
    resources: [],
    progress: 0
  },

  onLoad() {
    this.setData({
      plan: data.plan,
      resources: data.resources,
      checkins: data.getCheckins()
    });
    this.calcProgress();
  },

  onShow() {
    this.setData({ checkins: data.getCheckins() });
    this.calcProgress();
  },

  calcProgress() {
    const done = Object.keys(this.data.checkins).length;
    this.setData({ progress: Math.round(done / this.data.plan.length * 100) });
  },

  onCheckin(e) {
    const day = e.currentTarget.dataset.day;
    data.toggleCheckin(day);
    this.setData({ checkins: data.getCheckins() });
    this.calcProgress();
  },

  goDetail(e) {
    const day = this.data.plan[e.currentTarget.dataset.index];
    // 跳到第一个音标详情页，便于当天学习
    if (day.focus.length) {
      wx.navigateTo({ url: '/pages/detail/detail?sym=' + encodeURIComponent(day.focus[0]) });
    } else {
      wx.navigateTo({ url: '/pages/quiz/quiz' });
    }
  }
});
