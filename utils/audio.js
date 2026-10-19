// 音频播放/录音公共工具
// 音频约定路径（由 tools/gen_audio.py 批量生成）：
//   /audio/{id}.mp3         音标示范（id 为 ASCII 安全名，见 data.js AUDIO_IDS）
//   /audio/words/{w}.mp3    例词 / 测验词示范

// 播放音标示范：audio/{name}.mp3（name 需为 ASCII 文件名）
function playDemo(name) {
  if (!name) {
    wx.showToast({ title: '音频不存在', icon: 'none' });
    return;
  }
  const ctx = wx.createInnerAudioContext();
  ctx.src = '/audio/' + name + '.mp3';
  ctx.onError(() => {
    wx.showToast({ title: '未找到示范音频 ' + name + '.mp3', icon: 'none' });
  });
  ctx.play();
  return ctx;
}

// 播放例词示范：audio/words/{word}.mp3
function playWord(word) {
  if (!word) return;
  playDemo('words/' + word);
}

// 录音管理封装
function createRecorder(page, key) {
  const rm = wx.getRecorderManager();
  rm.onStart(() => {
    page.setData({ [key]: 'recording' });
  });
  rm.onStop((res) => {
    page.setData({ [key]: 'idle', recordPath: res.tempFilePath });
  });
  rm.onError(() => {
    page.setData({ [key]: 'idle' });
    wx.showToast({ title: '录音失败，请授权麦克风', icon: 'none' });
  });
  return rm;
}

// 播放用户录音
function playRecord(path) {
  if (!path) {
    wx.showToast({ title: '还没有录音哦', icon: 'none' });
    return;
  }
  const ctx = wx.createInnerAudioContext();
  ctx.src = path;
  ctx.play();
}

module.exports = {
  playDemo: playDemo,
  playWord: playWord,
  createRecorder: createRecorder,
  playRecord: playRecord
};
