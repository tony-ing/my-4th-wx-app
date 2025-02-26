// 在Page定义外添加安全封装
function safePage(pageConfig) {
  const originOnLoad = pageConfig.onLoad || function() {}
  
  pageConfig.onLoad = function(options) {
    try {
      originOnLoad.call(this, options)
    } catch (err) {
      console.error('页面加载异常:', err)
      wx.reportMonitor('1', 1)
      wx.redirectTo({
        url: '/pages/error/index'
      })
    }
  }
  return pageConfig
}

Page(safePage({
  data: {
    userInfo: null,
    isAdmin: false,
    isLogin: false,
    menuList: [
      {icon: 'icon-order', name: '我的预约', url: ''},
      {icon: 'icon-setting', name: '账户设置', url: ''},
      {icon: 'icon-location', name: '常用地址', url: ''},
      {icon: 'icon-service', name: '联系客服', url: ''},
      {icon: 'icon-info', name: '关于我们', url: ''}
    ],
    navBarHeight: 44 // 默认高度
  },

  onLoad() {
    this.calcNavBarHeight()
    this.checkLoginStatus()
    this.checkAdminStatus()
    // 验证本地图片是否存在
    try {
      const res = wx.getFileSystemManager().readFileSync('/images/my/default-avatar.png')
      console.log('默认头像存在', res)
    } catch (err) {
      console.error('默认头像缺失:', err)
      wx.showToast({
        title: '资源加载失败',
        icon: 'error'
      })
    }
    // 在onLoad中添加资源预加载
    if (typeof wx.preloadAssets === 'function') {
      const assetsToLoad = [
        '/images/my/arrow-right.png',
        '/images/my/default-avatar.png',
        '/images/my/icon-order.png',
        '/images/my/icon-setting.png',
        '/images/my/icon-location.png',
        '/images/my/icon-service.png',
        '/images/my/icon-info.png'
      ].filter(path => {
        try {
          wx.getFileSystemManager().accessSync(path)
          return true
        } catch {
          console.warn('资源不存在:', path)
          return false
        }
      })

      wx.preloadAssets({
        data: assetsToLoad,
        success: () => console.log('预加载成功')
      })
    } else {
      console.warn('基础库2.16.0+支持preloadAssets')
    }
  },

  // 检查登录状态
  checkLoginStatus() {
    const user = wx.getStorageSync('userInfo')
    if (user) {
      this.setData({ userInfo: user })
    }
  },

  // 检查管理员状态
  async checkAdminStatus() {
    const { userInfo } = this.data
    if (!userInfo) return
    
    const db = wx.cloud.database()
    try {
      const res = await db.collection('admins').where({
        openId: userInfo.openId
      }).count()
      
      this.setData({
        isAdmin: res.total > 0
      })
    } catch (err) {
      console.error('管理员验证失败:', err)
    }
  },

  // 修改登录处理函数
  handleLogin() {
    const that = this
    wx.getUserProfile({
      desc: '用于展示用户信息',
      success: () => {
        wx.login({
          success(res) {
            if (res.code) {
              wx.cloud.callFunction({
                name: 'login',
                data: { code: res.code },
                success: res => {
                  console.log('完整云函数响应:', res)
                  const result = res.result || {}
                  console.log('用户openId:', result.openId)
                  
                  // 合并本地获取的用户信息
                  that.setData({
                    openId: result.openId,
                    isAdmin: result.isAdmin,
                    userInfo: wx.getStorageSync('userInfo') || {},
                    isLogin: true
                  })
                },
                fail: err => {
                  console.error('云函数调用失败:', err)
                }
              })
            }
          }
        })
      }
    })
  },

  // 新增导航栏高度计算
  calcNavBarHeight() {
    const windowInfo = wx.getWindowInfo()
    const menuInfo = wx.getMenuButtonBoundingClientRect()
    
    // 新的计算公式
    const navHeight = menuInfo.top + menuInfo.height + 6
    this.setData({
      navBarHeight: Math.min(navHeight, 100)
    })
  },

  // 新增图片错误处理
  onImageError(e) {
    const type = e.currentTarget.dataset.type
    const defaultImg = type === 'avatar' 
      ? '/images/my/default-avatar.png'
      : '/images/common/placeholder.png'
    
    this.setData({
      [`${type}Url`]: defaultImg
    })
  }
})) 