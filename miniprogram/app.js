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
    // 初始化tab状态追踪
    wx.onAppRoute((res) => {
      if (res.path === 'pages/index/index') {
        this.globalData.currentTabIndex = 0
      } else if (res.path === 'pages/my/my') {
        this.globalData.currentTabIndex = 1
      }
    })
  },
  globalData: {
    needUpdateTabBar: false,
    currentTabIndex: 0
  },
  
  watchGlobalData(key, callback) {
    const observer = (newVal, oldVal) => {
      callback(newVal, oldVal)
    }
    this.watch(
      () => this.globalData[key],
      observer
    )
    return () => this.unwatch(observer)
  },
  
  watch(getter, callback) {
    const obj = this.globalData
    let value = getter()
    const timer = setInterval(() => {
      const newVal = getter()
      if (newVal !== value) {
        const oldVal = value
        value = newVal
        callback(newVal, oldVal)
      }
    }, 100)
    this._watchers = this._watchers || []
    this._watchers.push({ timer, getter, callback })
  },
  
  unwatch(observer) {
    this._watchers = this._watchers?.filter(watcher => {
      if (watcher.callback === observer) {
        clearInterval(watcher.timer)
        return false
      }
      return true
    })
  },
  
  onShow() {
    // 每次小程序回到前台时强制更新
    if (typeof this.updateTabBar === 'function') {
      this.updateTabBar()
    }
  },
  
  // 添加全局tabBar更新方法
  updateTabBar: function() {
    const tabBar = this.globalData.tabBarComponent
    if (tabBar && typeof tabBar.updateSelected === 'function') {
      tabBar.updateSelected()
    }
  }
}) 