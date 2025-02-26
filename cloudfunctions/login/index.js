const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event, context) => {
  const { code } = event
  const { OPENID } = cloud.getWXContext()
  
  try {
    const db = cloud.database()
    const admins = await db.collection('admins')
      .where({ openId: OPENID })
      .count()

    // 获取用户信息（需要前端传递）
    const { userInfo } = event

    return {
      openId: OPENID,
      isAdmin: admins.total > 0,
      userInfo: userInfo || {}  // 返回用户信息
    }

  } catch (err) {
    console.error('数据库查询失败:', err)
    return {
      openId: OPENID,
      isAdmin: false,
      userInfo: {}
    }
  }
} 