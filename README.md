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

2023-12-21 导航栏终极解决方案
- 完全重构导航定位计算逻辑
- 使用胶囊按钮bottom值计算安全间距
- 简化CSS变量命名体系
- 确保多设备兼容性

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

2023-12-21 优化分类导航
- 改为标签页式布局
- 添加底部指示条动画
- 优化文字选中效果
- 实现等分空间布局

2023-12-21 优化卡片间距
- 减少介绍卡片底部边距至40rpx
- 保持左右边距30rpx不变
- 维持顶部边距60rpx保持视觉平衡

2023-12-21 优化元素间距
- 调整介绍卡片底部边距至20rpx
- 使用负margin提升布局紧凑度
- 优化分类标题内边距
- 细化分割线提升精致感

2023-12-21 新增活动列表
- 实现分类活动展示功能
- 添加报名状态可视化设计
- 创建价格与报名按钮交互样式
- 优化信息层级排版

2023-12-21 完善活动数据
- 新增静心茶会3个活动
- 添加节气茶会3个主题活动
- 完成按导辅材3个实操课程
- 优化价格体系与状态配置

2023-12-21 固定导航栏实现
- 修改导航栏定位方式为fixed
- 添加滚动区域margin-top防止内容遮挡
- 动态计算安全区域间距
- 优化页面滚动体验

2023-12-21 导航栏垂直对齐优化
- 精确计算标题垂直位置
- 添加导航栏高度变量
- 微调文字对齐像素偏差
- 优化滚动区域间距

2023-12-21 导航栏精准对齐
- 动态计算胶囊按钮右侧间距
- 优化标题与按钮水平对齐
- 调整文字颜色与整体风格统一
- 精确控制导航栏垂直居中

2023-12-21 轮播位置优化
- 动态计算轮播图顶部间距
- 精确控制导航栏与内容间距
- 优化高度计算防止元素重叠
- 调整轮播视觉层级

2023-12-21 导航栏最终定位
- 精确计算胶囊按钮垂直中点
- 移除不必要的transform微调
- 优化导航栏呼吸空间
- 修复标题超出屏幕问题

2023-12-21 整体布局优化
- 基于状态栏高度重新计算导航位置
- 统一调整内容区域下移
- 为导航栏添加背景和投影
- 优化滚动区域计算逻辑

2023-12-21 导航栏终极定位方案
- 采用padding-top方式兼容状态栏
- 动态计算胶囊按钮实际占用高度
- 使用backdrop-filter实现毛玻璃效果
- 精确匹配胶囊按钮水平位置

2023-12-22 导航栏标准实现方案
- 重构导航栏定位实现方式
- 动态计算胶囊按钮位置
- 添加毛玻璃背景效果
- 精确控制标题与按钮对齐
- 优化滚动区域间距计算

2023-12-22 实现完整滚动功能
- 优化滚动容器高度计算方式
- 增加底部安全留白区域
- 修复活动列表底部截断问题
- 确保导航栏固定状态下完整滚动体验

2023-12-22 修复滚动区域异常
- 重构高度计算逻辑使用flex布局
- 适配iOS安全区域底部间距
- 优化滚动容器高度计算方式
- 减少底部冗余留白空间
- 修复开发工具预览模式滚动失效问题

2023-12-22 修复导航栏重叠问题
- 增加滚动区域margin-top防止内容上移
- 提升导航栏z-index至10000
- 修正活动导航负margin异常
- 优化分类导航层级关系

2023-12-22 修复滚动失效问题
- 修正滚动容器高度计算逻辑
- 移除冗余高度定义
- 确保flex布局正确生效
- 添加临时测试用最小高度

2023-12-22 最终修复滚动问题
- 重构容器flex布局结构
- 优化滚动容器高度计算逻辑
- 移除冲突的样式定义
- 修复安卓设备安全区域兼容问题

2023-12-22 调整导航栏高度
- 设置导航栏高度范围40-50
- 优化标题垂直居中算法
- 缩小标题字号提升精致感
- 增加左侧间距保持视觉平衡

2023-12-22 修复导航栏与轮播重叠
- 为轮播容器添加动态间距
- 优化轮播高度适配导航栏
- 增加顶部呼吸空间提升视觉舒适度

2023-12-22 接入云开发功能
- 实现云数据库分类数据动态加载
- 添加数据加载失败降级处理
- 优化用户等待交互体验
- 支持后台数据动态更新分类

2023-12-22 新增个人中心页面
- 创建my页面基础结构
- 实现微信登录功能
- 设计用户信息展示卡片
- 添加常用功能菜单列表
- 优化交互视觉体验

2023-12-22 优化个人中心布局
- 添加导航栏高度动态计算
- 精确控制用户信息区域位置
- 修复顶部留白不足问题
- 保持页面元素层级关系

2023-12-22 最终修复预加载问题
- 修正preloadAssets参数为字符串数组
- 移除冗余对象转换逻辑
- 简化资源路径验证流程
- 优化控制台警告信息

2023-12-22 适配最新微信API
- 替换弃用的getSystemInfoSync方法
- 使用新的窗口信息获取接口
- 更新导航栏高度计算逻辑
- 保持向下兼容性

2023-12-24 实现用户登录及管理员验证
- 新增个人中心登录功能
- 集成微信登录接口获取openId
- 添加管理员身份验证逻辑
- 设计用户信息展示卡片样式
- 创建云函数处理登录凭证验证
- 添加管理员标识展示

2023-12-24 优化登录功能
- 完善用户登录流程增加openId打印
- 创建login云函数处理登录逻辑
- 实现管理员身份数据库比对
- 增强云函数错误处理机制

2023-12-24 修复openId获取问题
- 修正云函数返回字段命名规范
- 完善前端数据容错处理
- 增加云函数调试日志输出
- 确保OPENID变量正确传递

2023-12-24 修复用户信息展示问题
- 完善用户信息获取流程
- 修复头像不显示问题
- 优化登录状态管理逻辑
- 确保登录按钮正确隐藏

2023-12-24 修复闪退问题
- 移除危险同步文件操作
- 优化资源预加载逻辑
- 修复用户信息传递缺失
- 增强异常处理稳定性
- 改进云函数参数传递方式

2023-12-24 修复预加载参数错误
- 修正preloadAssets参数格式
- 添加资源类型声明
- 增强资源路径验证
- 优化过滤逻辑

2023-12-24 移除默认tabBar
- 删除app.json中的tabBar配置
- 清理相关样式残留
- 为后续自定义导航栏开发做准备

2023-12-25 调整自定义tabBar位置
- 确认custom-tab-bar组件必须位于项目根目录
- 修正组件引用路径为绝对路径
- 验证组件在首页和个人中心页面的正确显示

2023-12-25 修复tabBar配置校验问题
- 补充tabBar.list空数组通过微信校验
- 保持自定义tabBar功能不受影响
- 确保开发者工具不报配置错误

2023-12-25 修复自定义tabBar数据问题
- 在组件内部维护tabBar配置数据
- 实现动态选中状态切换
- 添加点击跳转逻辑
- 确保图标资源路径正确

2023-12-25 完善tabBar基础配置
- 添加符合微信规范的基础tabBar配置
- 保持与自定义组件数据同步
- 确保通过微信配置校验
- 不影响实际自定义组件的展示效果

2023-12-25 修复组件路径引用问题
- 确认custom-tab-bar组件直接位于miniprogram根目录
- 验证组件路径大小写敏感性
- 确保组件包含完整的index四件套文件
- 添加开发者工具清除缓存指南

2023-12-25 恢复缺失组件配置文件
- 重建custom-tab-bar/index.json
- 确认组件基础配置正确
- 验证组件注册状态正常
- 确保开发者工具正确识别组件

2023-12-25 修复tabBar选中状态问题
- 添加页面生命周期监听自动更新选中状态
- 增加路由路径匹配逻辑
- 优化点击事件防重复触发机制
- 确保图标切换动画流畅

2023-12-25 最终修复tabBar状态问题
- 严格匹配页面路径大小写
- 延迟状态更新至页面切换成功后
- 添加错误回滚机制
- 增强路径匹配兼容性
- 增加调试日志输出

2023-12-25 终极状态同步方案
- 重构为全局事件驱动模式
- 简化状态更新逻辑
- 移除冗余异步操作
- 实现即时状态同步
- 增强组件生命周期管理

2023-12-25 彻底解决状态判断冲突
- 重构状态判断逻辑使用严格相等
- 初始化选中状态为无效值强制更新
- 标准化路径比较格式
- 添加即时初始化校验
- 优化条件判断避免无效渲染

2023-12-25 修复全局方法未定义问题
- 在app.js预定义updateTabBar方法
- 绑定tabBar组件实例到全局数据
- 添加方法存在性校验
- 保持向后兼容性

2023-12-25 实现活动数据云同步
- 重构活动列表数据加载逻辑
- 接入云数据库activities集合
- 实现时间格式转换方法
- 增加数据加载错误处理
- 保持原有UI样式不变
- 完善字段默认值处理机制

2023-12-25 修复时间格式转换问题
- 适配数字型时间存储格式
- 实现数字到时间字符串的转换
- 增加时间补零处理逻辑
- 增强时间格式容错能力

2023-12-25 优化时间格式化逻辑
- 支持3位数字时间输入
- 自动去除小时前导零
- 增强分钟补零处理
- 完善边界情况处理

2023-12-25 修复时间转换NaN问题
- 增强时间格式容错处理
- 支持带冒号的时间字符串
- 添加数字过滤和边界控制
- 完善空值默认处理机制

2023-12-25 实现活动数据分组展示
- 重构数据加载逻辑使用Promise.all
- 实现活动按分类ID分组功能
- 新增空状态提示界面
- 优化分类排序处理逻辑
- 分离数据格式化方法提升可维护性

2023-12-25 实现分类切换显示
- 重构分类选择逻辑使用分类ID
- 添加分类切换过渡动画
- 优化活动列表渲染性能
- 修复默认选中状态问题
- 增强分类导航交互反馈

2023-12-25 修复WXSS语法错误
- 修正CSS变量使用方式
- 统一单位处理规范
- 修复calc计算表达式错误
- 增强样式兼容性

2023-12-25 优化活动列表样式
- 重构活动卡片视觉层次
- 增加状态颜色编码系统
- 优化免费活动标识方式
- 添加按钮交互反馈动画
- 完善信息排版对齐规则
- 使用柔和配色方案

2023-12-25 修复活动项遮挡问题
- 增加滚动容器底部内边距
- 调整活动项底部间距
- 优化tabBar高度计算逻辑
- 确保内容与tabBar保持安全距离

2023-12-25 优化底部间距
- 增加滚动容器底部内边距至200rpx
- 加大活动项底部间距至50rpx
- 同步调整tabBar高度变量
- 确保内容与操作区域保持舒适距离

2023-12-25 优化底部布局计算
- 重构高度计算使用CSS变量
- 添加分类区块底部安全间距
- 优化tabBar高度定义方式
- 增强安全区域适配支持
- 保持原有padding设置不变

2023-12-25 终极底部布局优化
- 完善安全区域适配计算
- 增加最后一个活动项特殊间距
- 动态调整tabBar包含安全区域
- 优化分类区块整体间距
- 确保所有设备兼容性

2023-12-25 优化活动详情弹窗
- 实现活动详情按需加载
- 移除弹窗图片展示区域
- 新增description字段动态获取
- 优化数据加载错误处理
- 简化弹窗布局结构
- 增强网络请求稳定性

2023-12-25 优化弹窗交互设计
- 移除底部关闭按钮
- 仅保留右上角关闭方式
- 调整操作按钮为全宽样式
- 优化触控区域大小
- 统一按钮视觉权重

2023-12-25 增强弹窗交互安全
- 弹窗显示时锁定主页面滚动和触摸事件
- 自动滚动到页面顶部防止误操作
- 使用CSS控制交互状态
- 保持弹窗操作独占性

2023-12-25 实现底部弹窗样式
- 调整弹窗从底部弹出
- 添加滑动过渡动画
- 设置弹窗高度为50%屏幕
- 优化视觉层级关系
- 保持与tabBar的覆盖关系

2023-12-25 优化弹窗动画实现
- 改用纯CSS过渡动画
- 移除不兼容的JS动画API
- 保持流畅的滑动效果
- 增强低版本兼容性

2023-12-25 紧急修复页面交互
- 恢复滚动容器事件响应
- 修正弹窗遮罩层影响范围
- 解除页面滚动锁定
- 确保弹窗与页面滚动隔离

2023-12-25 最终交互修复
- 完全恢复页面滚动能力
- 修正容器层级关系
- 移除所有错误的事件锁定
- 确保弹窗与页面滚动隔离
- 优化滚动位置记录

2023-12-25 回滚弹窗样式
- 恢复居中弹窗布局
- 移除底部弹出动画
- 优化弹窗内边距
- 修复滚动容器高度
- 保持页面滚动能力

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

我们做的很不错，接下来是首页的下半部份

12. 在intro-card的下方，需要做一个活动报名区域，首先我们有四大分类的活动：1. 正念按导，2.静心茶会，3.节气茶会精品班，4.按导辅材实操课。我们先添加这四个标题区域，我想的是做一个横向的分类展示，这四个分类横向平铺展示。

13. 现在需要优化一下整体的样式，我发现intro-card和nav-title直接的间隙过大，有可能是intro-card下方的margin过大导致的，我们需要平衡页面上各个元素的位置布局。

14. 接着我们要做下方活动报名的具体内容了，现在有四个大分类，首先我们在"正念按导"这个分类下，安排四个活动报名列表，样式你可以发挥你的想象力，活动报名列表先不安排图片。

15. 你的设计超出了我的预期，接下来我们按照14步的做法，在剩余三个分类下，都安排3～4个活动报名列表吧。


现在我在小程序中开启了云开发，所以项目的结构有改变，miniprogram文件夹作为项目的根目录，所有的前端代码都在这个文件夹下。cloudfunctions文件夹是云函数文件夹，后续我们再来开发云函数。请注意，不要在miniprogram文件夹外新增代码文件。

16. 我已经配置好了基本的云开发环境，并且我把首页图片轮播的图片上传到了云储存中，并且imageUrl已经定义好路径，可是现在图片显示不出来，可以帮我排查一下吗？

17. 我们重新来解决图片轮播不显示的问题，目前的现象是，只有sample3.jpeg会显示在图片轮播区域中，另外两个sample1, sample2显示灰色。

18. 我们忽略第17步，接下来我们需要把首页title的区域固定住，包括左侧"按导小院"四个字，和右侧的胶囊按钮，不要被页面上下滑动所影响。

19.很好，现在首页title现在固定住了，但是位置跑偏了，我需要让它和右侧的胶囊按钮保持在同一水平线。

20. 我分析了一下，似乎是swiper-container的顶部和右侧胶囊按钮区域重叠了，我需要把swiper-container整体向下移动一点点。

21. 经过刚才的调整，现在的效果合理多了，现在要改进的地方是，页面下方的内容超出了屏幕范围，需要允许上下滑动查看，也就是除了nav-bar需要固定在上面，页面的其余内容都应该支持上下滑动查看。


现在我们要开始接入云开发的功能了。
22.我已经在云开发的数据库中添加了nav-list的categories数据，集合名称叫"activities"。我的云开发配置及环境id已经写在app.js中。现在要做的是需要把nav-list的categories，替换成数据库中的activities集合。activities集合有两个字段，name和order，name就是名称，order就是它的顺序。

23. 这一步请发挥你的想象力，我需要一个个人中心的页面，和大多数小程序的个人中心页面类似，比如页面上方是用户头像，有一个按钮可以允许用户使用微信账号登陆。头像下方是一些基础的设置按钮入口之类的。代码的位置在miniprogram/pages/my 文件夹中，请不要重复生成已有的代码文件。

24. 现在个人页面做出来了，下一步我们要实现用户微信登陆小程序，并且我们需要获取到用户的唯一性ID（openId）,同时我们需要和数据库中"admins"集合的openId字段进行比对，若相同，则标记此用户为管理员。

25. 我们已经删除了旧的tabBar，现在我需要你发挥想象力，设计一个好看的tabBar，我只需要两个按钮，一个首页按钮，一个个人中心按钮，小程序进入时，默认选中首页，点击个人中心，默认跳转到/pages/my/my的页面。但是首先有一个问题要考虑，tabBar是同时会被pages/index/index和pages/my/my页面使用的，所以需要考虑如何设计一个通用的tabBar组件，可以被两个页面同时使用。

26. 我们现在已经实现了tabBar，但是有一个小问题，点击对应的tabBar之后，图标没有变成selectedIcon。

27. 我们先不管selectedIcon的问题了，现在我们需要继续完善活动报名部分的内容。目前activityCategories已经对接了云数据库，现在我们需要activityList也从云数据库中"activities"集合获取数据。activities中的基础字段有：_id, name, categoryId, startTime, endTime, room, weekDay。其中categoryId与activityCatgegories下的id字段相同时，表示此活动属于此分类。请你不要更改现有的activities样式，仅更改数据获取的方式。

28.你做的很棒，现在我们来优化activity活动报名区域的样式，你可以发挥你的想象力，或者参考其他小程序的活动报名样式，设计一个好看简约的样式。要突出活动名称，时间，以及是否已满，是否免费。颜色也尽量简单，不要出现太突兀的颜色，例如红色

29. 现在活动报名区域做的差不多了，下一步要做的是，用户点击具体的活动报名后，会出现一个悬浮窗，悬浮窗的布局类似购物软件选择商品时的页面类似，有图片，有活动描述，活动时间地点。以及下方会出现一个日历选择区域。用户可以根据具体日期选择希望参与的时间。

30. 我们进一步优化第29步的缺陷。首先，用户点击activity-item之后，弹出弹窗，弹窗的右上角应该需要关闭按钮，或点击弹窗外部也允许关闭弹窗。

31. 我们需要重新调整一下31步所说的逻辑。首先，弹窗只允许用户点击右上角的关闭按钮关闭，其次，弹窗下方只需要一个"立即报名"的按钮，不需要额外的关闭按钮

32. 很好，接下来我们解决弹窗的样式。我希望弹窗能从页面的最底部出现，也就是要覆盖掉底下的tabBar。弹窗整体的高度大概占屏幕的50%。

2023-12-25 最终滚动修复
- 完全恢复原生滚动行为
- 修正容器层级关系
- 移除所有错误的事件锁定
- 优化滚动位置记录功能
- 确保弹窗与页面滚动隔离