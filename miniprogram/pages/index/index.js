const db = wx.cloud.database()

Page({
  data: {
    imgUrls: [
      'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/adxy_home_image2.jpg',
      'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/adxy_home_image1.jpg',
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
    activityList: [],
    navBarHeight: 40, // 默认高度改为40
    menuRight: 0, // 胶囊按钮右间距
    menuTop: 0, // 胶囊按钮顶部间距
    activityGroups: [],
    activeCategoryId: null, // 改为使用分类ID
    showDetailDialog: false,
    currentActivity: null,
    weekSchedule: [], // 示例周排期数据
    scrollTop: 0
  },
  onLoad() {
    // 初始化云开发
    wx.cloud.init({
      env: 'adxy-0gft2mgb8637adf5', // 需与app.js中一致
      traceUser: true
    })
    
    this.loadData()
    const windowInfo = wx.getWindowInfo()
    const menu = wx.getMenuButtonBoundingClientRect()
    
    // 使用新的属性名
    const leftSpace = windowInfo.windowWidth - menu.right + 16

    this.setData({
      cssVars: {
        '--nav-top': `${menu.top + (menu.height - 32) / 2}px`,
        '--nav-height': `${menu.height + 4}px`,
        '--nav-margin': `${leftSpace}px`,
        '--scroll-margin': `${menu.bottom + 20}px`,
        '--status-bar-height': `${windowInfo.statusBarHeight}px`,
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
      menuTop: menuInfo.top,
      cssVars: {
        '--navBarHeight': `${calculatedHeight}px`
      }
    })

    // 验证云文件路径
    wx.cloud.downloadFile({
      fileID: 'cloud://adxy-0gft2mgb8637adf5.6164-adxy-0gft2mgb8637adf5-1343197700/adxy_home_image1.jpg',
      success: res => console.log('文件存在', res),
      fail: err => console.error('文件不存在', err)
    })

    // 修改系统信息获取方式
    wx.getSystemInfo({
      success: (res) => {
        const navBarHeight = res.statusBarHeight + 44
        this.setData({
          navBarHeight,
          menuTop: res.screenHeight - res.safeArea.bottom + 4,
          cssVars: {
            '--navBarHeight': `${navBarHeight}px`,
            '--tabBarHeight': '120rpx'
          }
        })
      },
      fail: (err) => {
        console.error('获取系统信息失败:', err)
        this.setData({
          navBarHeight: 80,
          cssVars: {
            '--navBarHeight': '80px',
            '--tabBarHeight': '120rpx'
          }
        })
      }
    })
  },
    // 添加tab点击监听
    onTabItemTap(item) {
      debugger; // 调试断点
      console.log(item.pagePath);
      // ...其他逻辑...
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
    const categoryId = e.currentTarget.dataset.id
    this.setData({ 
      activeCategoryId: categoryId,
      activeCategory: this.data.activityGroups.findIndex(cat => cat.id === categoryId)
    })
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

  // 新增组合式数据加载方法
  async loadData() {
    wx.showLoading({ title: '加载中...' })
    try {
      const [categoriesRes, activitiesRes] = await Promise.all([
        wx.cloud.database().collection('activityCategories').orderBy('order', 'asc').get(),
        wx.cloud.database().collection('activities').get()
      ])
      
      this.processData(categoriesRes.data, activitiesRes.data)
    } catch (err) {
      console.error('数据加载失败:', err)
      wx.showToast({ title: '数据加载失败', icon: 'none' })
    }
    wx.hideLoading()
  },

  // 新增数据处理方法
  processData(categories, activities) {
    // 转换分类数据
    const sortedCategories = categories.map(cat => ({
      id: cat._id,
      name: cat.name,
      order: cat.order,
      activities: []
    })).sort((a, b) => a.order - b.order)

    // 分组活动数据
    activities.forEach(activity => {
      const category = sortedCategories.find(cat => cat.id === activity.categoryId)
      if (category) {
        category.activities.push(this.formatActivity(activity))
      }
    })
    debugger
    this.setData({ 
      activityGroups: sortedCategories,
      categories: sortedCategories.map(cat => cat.name) 
    })

    // 设置默认选中第一个分类
    if (sortedCategories.length > 0) {
      this.setData({ 
        activeCategoryId: sortedCategories[0].id,
        activeCategory: 0
      })
    }
  },

  // 修改活动点击处理逻辑
  onActivityTap(e) {
    const activityId = e.currentTarget.dataset.id
    wx.showLoading({ title: '加载中...' })
    
    wx.cloud.database().collection('activities').doc(activityId).get()
      .then(res => {
        console.log('[DEBUG] 活动数据:', res.data)
        const activity = this.formatActivity(res.data)
        this.setData({
          currentActivity: {
            ...activity,
            description: res.data.description || '',
            time: `${this.formatTime(res.data.startTime)}-${this.formatTime(res.data.endTime)}`
          },
          showDetailDialog: true
        })
      })
      .catch(err => {
        console.error('获取活动详情失败:', err)
        wx.showToast({ title: '加载失败', icon: 'none' })
      })
      .finally(() => {
        wx.hideLoading()
        console.log('当前弹窗状态:', this.data.showDetailDialog)
      })
  },

  // 修改活动格式化方法
  formatActivity(item) {
    return {
      id: item._id,
      title: item.name,
      time: `${this.formatTime(item.startTime)}-${this.formatTime(item.endTime)}`,
      date: this.getWeekDay(item.weekDay),
      price: item.price || '免费',
      status: item.status || '可报名',
      room: item.room,
      weekDay: item.weekDay // 保留周数字段用于排期生成
    }
  },

  // 统一时间格式化方法
  formatTime(timeValue) {
    if (!timeValue) return '时间待定'
    try {
      const date = new Date(timeValue)
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    } catch (e) {
      console.error('时间格式错误:', timeValue)
      return '时间待定'
    }
  },

  // 修复周显示方法
  getWeekDay(dayNum) {
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return weekDays[dayNum] || '每天'
  },

  // 生成示例周排期
  generateWeekSchedule(weekDay) {
    const days = []
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push({
        weekDay: ['周日','周一','周二','周三','周四','周五','周六'][date.getDay()],
        date: `${date.getMonth()+1}/${date.getDate()}`,
        available: date.getDay() === weekDay
      })
    }
    this.setData({ weekSchedule: days })
  },

  // 报名处理
  handleBook() {
    wx.showToast({
      title: '报名成功',
      icon: 'success',
      success: () => {
        this.setData({ showDetailDialog: false })
      }
    })
  },

  // 新增事件阻止方法
  stopPropagation() {}, // 空方法阻止事件冒泡

  // 在page实例中添加观察器
  observers: {
    'showDetailDialog': function(val) {
      console.log('[DEBUG] showDetailDialog变化:', val)
    }
  },

  closeDetailDialog() {
    this.setData({ 
      showDetailDialog: false 
    })
  },

  onPageScroll(e) {
    this.setData({ scrollTop: e.scrollTop })
  }
})
