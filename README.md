你是一个微信小程序开发专家，现在需要你开发一个微信小程序，请按照以下要求进行开发：

微信小程序开发文档
程序背景：我们有一个禅意活动空间，这个小程序是以这个空间为主体，能让用户了解并报名参加空间内的活动，以及查看往期的精彩活动。

程序目录结构：
images文件夹存放所有用到的icon，图片等。
pages文件夹存放小程序用到的各个页面，其中index文件夹存放首页代码，my文件夹存放用户中心的代码。

更新记录：
2023-12-20 创建首页基础布局
- 新增pages/index目录及页面文件
- 设计包含顶部形象图+文字介绍的布局
- 配置页面导航栏样式

2023-12-21 添加首页轮播功能
- 实现可自动轮播的图片展示组件
- 配置3秒自动切换+滑动动画
- 添加轮播指示点样式
- 支持多图循环播放功能

2023-12-21 修复样式冲突问题
- 调整全局容器类名避免冲突
- 修复轮播图不显示问题
- 加强页面样式作用域控制

2023-12-21 首页布局优化
- 轮播区域下移80rpx
- 调整轮播比例为4:3（690x520）
- 文字介绍区域增加底部间距
- 优化卡片背景透明度提升层次感

2023-12-21 安全区域适配
- 添加顶部安全区域padding防止遮挡胶囊按钮
- 优化容器高度计算方式
- 调整轮播定位方式

2023-12-21 新增首页功能模块
- 添加自定义导航标题"按导小院"
- 创建场地信息展示区域
- 增加营业时间和地址信息
- 优化信息卡片视觉层次

2023-12-21 导航栏精准定位
- 使用wx.getMenuButtonBoundingClientRect获取胶囊按钮位置
- 动态计算导航标题位置
- 增加垂直居中布局

2023-12-21 轮播功能升级
- 实现无限循环双向滑动
- 添加动态缩放效果
- 优化相邻卡片可见性
- 增加当前项高亮指示

2023-12-21 修复图片显示问题
- 移除测试用全局样式
- 调整轮播项透明度设置
- 优化层级关系

2023-12-21 轮播高度优化
- 将轮播容器高度调整为820rpx
- 修复图片显示比例问题
- 优化滑动区域视觉表现

2023-12-21 修复高度失效问题
- 移除swiper内联高度样式
- 加强wxss样式优先级
- 清理残留测试样式

2023-12-21 实现页面滚动
- 添加scroll-view滚动容器
- 优化页面布局结构
- 增加底部留白防止内容截断

2023-12-21 修复布局显示问题
- 调整容器层级结构
- 修复滚动区域计算错误
- 优化导航栏定位方式

2023-12-21 新增导航功能
- 添加导航图标及文字标签
- 实现点击跳转地图功能
- 优化场地信息布局结构
- 移除冗余时间信息展示

2023-12-21 优化场地信息布局
- 调整info-text与navi-icon水平对齐
- 固定信息卡片最小高度
- 优化文字与图标的间距

2023-12-21 轮播样式优化
- 实现无缝全屏轮播效果
- 移除图片间距和圆角
- 调整图片模式为scaleToFill
- 取消动态缩放效果

2023-12-21 优化顶部间距
- 增加滚动区域顶部内边距至200rpx
- 为轮播图添加40rpx上边距
- 提升页面视觉平衡感

2023-12-21 优化视觉过渡
- 为轮播图添加渐变投影
- 统一信息卡片阴影样式
- 通过层级叠加实现平滑过渡
- 优化背景颜色提升对比度

2023-12-21 优化阴影细节
- 调整轮播阴影为底部单边投影
- 为信息卡片添加四周均匀阴影
- 增加细微边框提升层次
- 优化阴影过渡自然度

2023-12-21 优化信息卡片圆角
- 添加上方大圆角（24rpx）
- 保持下方小圆角（12rpx）
- 调整文字与图标间距

2023-12-21 完善卡片圆角设计
- 优化不对称圆角比例
- 调整卡片间距提升呼吸感
- 微调内部元素对齐方式

2023-12-21 精确调整元素间距
- 使用负margin消除像素级间隙
- 微调定位实现无缝衔接
- 优化z-index确保阴影覆盖

2023-12-21 优化信息卡片尺寸
- 缩小卡片最小高度至80rpx
- 调整内边距提升紧凑感
- 等比例缩小导航图标系统

我希望你能按照这个文档，一步一步的帮助我开发功能。并且不要重复生成已有的代码文件及目录

1. 请发挥你的想象力，设计能力，设计一个简约好看的首页布局，首页需要展示一张禅意空间的图片，图片目录在images/homeimage/sample1.jpeg. 并且图片下方需要有一段区域展示文字介绍

2. 如果图片有多张，是否可以把单张图片改为一个横向的图片轮播？需要轮播图片的目录已经在imgUrls中定义好了

3. 接下来我们需要微调首页的样式，目前的问题是，图片轮播的显示区域太靠上，需要往下一点点，并且图片轮播区域的宽高比需要调整，可以纵向拉大一些，并且下方的文字区域可以往下移，接近屏幕底部。

4. 现在我们再来微调首页样式，我们要在页面上方，也就是胶囊按钮的左侧，增加一个标题，标题内容为"按导小院"。intro-card的上方和图片轮播的下方有一处空白，我希望可以在空白处增加一行"场地信息"。

5. 现在图片轮播是从左往右单向的，你可以改成无限循环双向的轮播吗？

6. 现在我们再来微调，第5步我们调整了图片双向轮播，但是调整完之后，图片的宽高比变了，高度变小了，希望高度可以适当增加。

7. 现在图片的样式基本符合我的要求，下方的facility-info也符合预期，现在我需要页面是能够上下滑动的，因为intro-card的位置已经超出屏幕了。

8. 接下来我们调整facility-info的部分，我加了一个navi-icon，我希望它在facility-info的右侧，并且在navi-icon的正下方，增加"导航"两个字。

9. 现在我们需要重新微调图片的部分，我想要图片与图片之间不要有缝隙，需要无缝衔接，同时每张图片的宽度需要和屏幕宽度一致，并且图片不要有圆角处理.

10.接下来是考验你ui的设计能力了。我想要改进facility-info和图片之间的过渡，现在图片下方到facility-info之间的过渡很生硬，我希望在图片的下方，增加一个阴影效果，facility-info的上下左右，也增加相同的阴影，这样两者可以更好的融为一体，你试试看？

11. 我们忽略掉第10吧，我想要在facility-info的上方两个角增加圆角的效果。
