// 确保在app.js中全局初始化
App({
  onError(err) {
    console.error('全局错误:', err)  // 真机调试时可查看console信息
    wx.showToast({
      title: '程序异常',
      icon: 'none'
    })
  },
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'adxy-0gft2mgb8637adf5',
        traceUser: true
      })
    }
  }
}) 