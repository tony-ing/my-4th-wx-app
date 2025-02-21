App({
  onLaunch() {
    wx.cloud.init({
      env: 'adxy-0gft2mgb8637adf5', // 替换实际环境ID
      traceUser: true
    })
  }
})