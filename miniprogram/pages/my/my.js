Page({
  data: {
    userInfo: null,
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
  },

  // 检查登录状态
  checkLoginStatus() {
    const user = wx.getStorageSync('userInfo')
    if (user) {
      this.setData({ userInfo: user })
    }
  },

  // 微信登录
  handleLogin() {
    wx.getUserProfile({
      desc: '用于完善会员信息',
      success: res => {
        wx.setStorageSync('userInfo', res.userInfo)
        this.setData({ userInfo: res.userInfo })
        wx.showToast({ title: '登录成功' })
      },
      fail: err => {
        console.error('登录失败:', err)
        wx.showToast({ 
          title: '登录失败，请重试', 
          icon: 'none' 
        })
      }
    }).catch(err => {
      console.error('Promise异常:', err)
    })
  },

  // 新增导航栏高度计算
  calcNavBarHeight() {
    const menuInfo = wx.getMenuButtonBoundingClientRect()
    // 安全高度计算
    const systemInfo = wx.getSystemInfoSync()
    const calculatedHeight = Math.min(
      menuInfo.bottom + systemInfo.statusBarHeight,
      100
    )
    this.setData({ navBarHeight: calculatedHeight })
  }
}) 