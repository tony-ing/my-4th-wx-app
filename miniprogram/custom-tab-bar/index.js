Component({
  data: {
    // 自定义tabBar数据配置
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/images/home.png",
        selectedIconPath: "/images/home_active.png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我的",
        iconPath: "/images/user.png",
        selectedIconPath: "/images/user_active.png"
      }
    ],
    selected: -1 // 初始化为无效值强制触发更新
  },

  lifetimes: {
    attached() {
      // 初始化时绑定全局事件
      const app = getApp()
      app.globalData.tabBarComponent = this // 绑定组件实例
      
      this.updateSelected = () => {
        const pages = getCurrentPages()
        const currentPage = pages[pages.length - 1]?.route || ''
        const currentPath = `/${currentPage.replace(/^\//, '')}` // 标准化路径格式
        
        const targetIndex = this.data.list.findIndex(item => 
          item.pagePath.toLowerCase() === currentPath.toLowerCase()
        )
        
        if (targetIndex !== -1 && targetIndex !== this.data.selected) {
          this.setData({ selected: targetIndex })
          console.log('状态更新:', targetIndex)
        }
      }
      
      // 立即执行一次初始化
      this.updateSelected()
      app.updateTabBar = () => this.updateSelected() // 兼容旧调用
    }
  },

  pageLifetimes: {
    show() {
      this.updateSelected()
    }
  },

  methods: {
    switchTab(e) {
      const { index, path } = e.currentTarget.dataset
      if (this.data.selected === index) return
      
      // 立即更新视图状态
      this.setData({ selected: index }, () => {
        wx.switchTab({
          url: path,
          success: () => {
            // 通过全局方法强制同步
            const app = getApp()
            if (typeof app.updateTabBar === 'function') {
              app.updateTabBar()
            }
          }
        })
      })
    }
  }
}) 