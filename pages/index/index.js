Page({
  data: {
    imgUrls: [
      '/images/homeimage/sample1.jpeg',
      '/images/homeimage/sample2.jpeg',
      '/images/homeimage/sample3.jpeg',
    ],
    contentText: '在喧嚣都市中开辟一方静土，我们定期举办茶道研习、禅意手作、静心冥想等活动。通过质朴的空间设计与精心策划的内容，帮助现代人暂别纷扰，回归内心的平静与力量。',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    navStyle: 'top: 80rpx;', // 初始值
    circular: true, // 开启循环模式
    activeIndex: 0
  },
  onLoad() {
    // 获取胶囊按钮位置信息
    const menuInfo = wx.getMenuButtonBoundingClientRect()
    this.setData({
      navStyle: `top: ${menuInfo.top}px; height: ${menuInfo.height}px;`
    })
  },
  // 新增轮播切换监听
  onSwipeChange(e) {
    this.setData({
      activeIndex: e.detail.current
    })
  }
})
