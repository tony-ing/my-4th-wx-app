// 确保在app.js中全局初始化
App({
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