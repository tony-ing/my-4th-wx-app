const cloud = require('wx-server-sdk')
cloud.init({ env: process.env.Env })

exports.main = async (event) => {
  const { code } = event
  
  // 获取openid
  const { OPENID: openid } = cloud.getWXContext()
  
  return {
    openid,
    code
  }
} 