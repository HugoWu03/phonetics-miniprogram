App({
  onLaunch() {
    // 初始化打卡记录存储
    if (!wx.getStorageSync('checkins')) {
      wx.setStorageSync('checkins', {})
    }
  }
})
