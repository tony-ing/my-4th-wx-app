// 确保在app.js中全局初始化
App({
  onLaunch() {
    wx.cloud.init({
      env: 'adxy-0gft2mgb8637adf5',
      traceUser: true
    })
  }
}) 