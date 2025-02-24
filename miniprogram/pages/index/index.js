Page({
  data: {
    imgUrls: [
      'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/sample1.jpeg',
      'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/sample2.jpeg',
      'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/sample3.jpeg'
    ],
    contentText: '在喧嚣都市中开辟一方静土，我们定期举办茶道研习、禅意手作、静心冥想等活动。通过质朴的空间设计与精心策划的内容，帮助现代人暂别纷扰，回归内心的平静与力量。',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    navStyle: 'top: 80rpx;', // 初始值
    circular: true, // 开启循环模式
    activeIndex: 0,
    scrollPadding: 'padding-top: 0px;', // 初始值
    categories: [], // 初始化为空数组
    activeCategory: 0,
    activities: [
      // 正念按导
      [
        { title: '经络疏通基础班', time: '每周三 14:00-16:00', place: '禅意空间A室', price: 198, status: 'ing' },
        { title: '肩颈放松专题课', time: '每周五 09:30-11:30', place: '养生堂B区', price: 268, status: 'end' },
        { title: '全身调理工作坊', time: '每月第一周周六', place: '多功能厅', price: 368, status: 'ing' }
      ],
      // 静心茶会
      [
        { title: '宋代点茶体验', time: '每周二 10:00-12:00', place: '茶室雅座', price: 168, status: 'ing' },
        { title: '古树普洱品鉴', time: '每周四 15:00-17:00', place: '茶文化馆', price: 228, status: 'ing' },
        { title: '茶道入门课程', time: '每月第二周周日', place: '禅茶室', price: 298, status: 'end' }
      ],
      // 节气茶会
      [
        { title: '立春·迎新茶会', time: '2024-02-04 14:00', place: '节气主题馆', price: 198, status: 'ing' },
        { title: '谷雨·雨前茶会', time: '2024-04-19 10:00', place: '露天茶庭', price: 258, status: 'ing' },
        { title: '秋分·养生茶会', time: '2024-09-22 15:00', place: '养生茶室', price: 228, status: 'ing' }
      ],
      // 按导辅材
      [
        { title: '艾灸疗法实操', time: '每周六 09:00-11:00', place: '理疗室A', price: 298, status: 'ing' },
        { title: '刮痧入门教学', time: '每周日 14:30-16:30', place: '理疗室B', price: 268, status: 'end' },
        { title: '拔罐技法精讲', time: '每月第三周周六', place: '传统疗法室', price: 328, status: 'ing' }
      ]
    ],
    navBarHeight: 40, // 默认高度改为40
    menuRight: 0, // 胶囊按钮右间距
    menuTop: 0 // 胶囊按钮顶部间距
  },
  onLoad() {
    // 初始化云开发
    wx.cloud.init({
      env: 'adxy-0gft2mgb8637adf5', // 需与app.js中一致
      traceUser: true
    })
    
    this.loadCategories()
    const menu = wx.getMenuButtonBoundingClientRect()
    const system = wx.getSystemInfoSync()
    
    // 核心计算公式
    const titleTop = menu.top + (menu.height - 32) / 2 // 32px为设计稿文字高度
    const navHeight = menu.height + 4 // 增加呼吸空间
    const leftSpace = system.windowWidth - menu.right + 16 // 右侧留出16rpx间距

    this.setData({
      cssVars: {
        '--nav-top': `${titleTop}px`,
        '--nav-height': `${navHeight}px`,
        '--nav-margin': `${leftSpace}px`,
        '--scroll-margin': `${menu.bottom + 20}px`,
        '--status-bar-height': `${system.statusBarHeight}px`,
        '--capsule-height': `${menu.height}px`,
        '--nav-padding': `${menu.left - 20}px` // 胶囊按钮左侧间距-20rpx
      }
    })

    // 获取胶囊按钮信息
    const menuInfo = wx.getMenuButtonBoundingClientRect()
    const calculatedHeight = Math.min(Math.max(menuInfo.bottom + 4, 40), 50)
    
    this.setData({
      navBarHeight: calculatedHeight,
      menuRight: menuInfo.right,
      menuTop: menuInfo.top
    })

    // 验证云文件路径
    wx.cloud.downloadFile({
      fileID: 'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/sample1.jpeg',
      success: res => console.log('文件存在', res),
      fail: err => console.error('文件不存在', err)
    })
  },

  // 新增轮播切换监听
  onSwipeChange(e) {
    this.setData({
      activeIndex: e.detail.current
    })
  },
  // 新增导航点击事件
  onNavigate() {
    wx.openLocation({
      latitude: 24.492155, // 实际纬度
      longitude: 118.145378, // 实际经度
      name: '惠和石文化园',
      address: '厦门市湖里区吕岭路惠和石文化园'
    })
  },
  onCategoryTap(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeCategory: index })
  },

  onImageError(e) {
    const index = e.currentTarget.dataset.index
    const defaultImages = [
      'cloud://default-img1',
      'cloud://default-img2',
      'cloud://default-img3'
    ]
    this.setData({
      [`imgUrls[${index}]`]: defaultImages[index] || defaultImages[0]
    })
  },

  // 新增云数据库查询方法
  async loadCategories() {
    wx.showLoading({ title: '加载中...' })
    
    try {
      const res = await wx.cloud.database()
        .collection('activities')
        .orderBy('order', 'asc')
        .get()
      
      if (res.data && res.data.length > 0) {
        this.setData({
          categories: res.data.map(item => item.name)
        })
      } else {
        this.setFallbackData()
      }
    } catch (err) {
      console.error('数据加载失败:', err)
      this.setFallbackData()
    }
    
    wx.hideLoading()
  },

  // 新增备用数据方法
  setFallbackData() {
    this.setData({
      categories: ['正念按导', '静心茶会', '节气茶会', '按导辅材']
    })
    wx.showToast({
      title: '使用本地数据',
      icon: 'none'
    })
  }
})
