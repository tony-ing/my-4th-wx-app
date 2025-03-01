// 在Page定义外添加安全封装
function safePage(pageConfig) {
  const originOnLoad = pageConfig.onLoad || function() {}
  
  pageConfig.onLoad = function(options) {
    try {
      originOnLoad.call(this, options)
    } catch (err) {
      console.error('页面加载异常:', err)
      // 改用更安全的跳转方式
      wx.nextTick(() => {
        wx.navigateTo({
          url: '/pages/error/index'
        })
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
    
    // 移除同步文件检查改用异步
    wx.getFileSystemManager().access({
      path: '/images/my/default-avatar.png',
      success: () => console.log('默认头像存在'),
      fail: () => {
        console.error('默认头像缺失')
        this.setData({ avatarError: true })
      }
    })

    // 修改预加载资源配置
    if (wx.canIUse('preloadAssets')) {
      const assetsToLoad = [
        {src: '/images/my/arrow-right.png', type: 'image'},
        {src: '/images/my/default-avatar.png', type: 'image'},
        {src: '/images/common/placeholder.png', type: 'image'}
      ].filter(item => {
        try {
          wx.getFileSystemManager().accessSync(item.src)
          return true
        } catch {
          console.warn('资源不存在:', item.src)
          return false
        }
      })

      wx.preloadAssets({
        data: assetsToLoad,
        success: () => console.log('预加载成功'),
        fail: err => console.error('预加载失败:', err)
      })
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
      success: (userRes) => {  // 获取用户信息
        wx.login({
          success(loginRes) {
            if (loginRes.code) {
              wx.cloud.callFunction({
                name: 'login',
                data: { 
                  code: loginRes.code,
                  userInfo: userRes.userInfo  // 传递用户信息
                },
                success: res => {
                  console.log('登录成功:', res)
                  wx.setStorageSync('userInfo', res.result.userInfo)
                  that.setData({
                    userInfo: res.result.userInfo,
                    isLogin: true,
                    isAdmin: res.result.isAdmin
                  })
                },
                fail: err => {
                  console.error('云登录失败:', err)
                  wx.showToast({ title: '登录失败' })
                }
              })
            }
          },
          fail: err => {
            console.error('微信登录失败:', err)
            wx.showToast({ title: '登录失败' })
          }
        })
      },
      fail: err => {
        console.error('获取用户信息失败:', err)
        wx.showToast({ title: '需要授权才能登录' })
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