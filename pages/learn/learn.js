const data = require('../../utils/data');

Page({
  data: {
    tab: 'vowel',       // vowel | consonant
    groups: [],
    currentGroups: []
  },

  onLoad() {
    const vowelKeys = ['long', 'short', 'diph'];
    const consKeys = ['stop', 'fric', 'affr', 'nasal', 'lat', 'semi'];
    const groups = data.groups.map(g => ({
      ...g,
      items: data.phonemes.filter(p => p.group === g.key)
    }));
    this.setData({
      groups,
      vowelKeys,
      consKeys,
      currentGroups: groups.filter(g => vowelKeys.indexOf(g.key) >= 0)
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    const keys = tab === 'vowel' ? this.data.vowelKeys : this.data.consKeys;
    this.setData({
      tab,
      currentGroups: this.data.groups.filter(g => keys.indexOf(g.key) >= 0)
    });
  },

  goDetail(e) {
    const sym = e.currentTarget.dataset.sym;
    wx.navigateTo({ url: '/pages/detail/detail?sym=' + encodeURIComponent(sym) });
  }
});
