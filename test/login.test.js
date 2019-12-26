const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

<<<<<<< HEAD
console.log("注意: 测试登录需在 test/login.test.js 中填写账号密码!!!");

describe("测试登录是否正常", () => {
  it("手机登录 code 应该等于200", done => {
=======
console.log('注意: 测试登录需在 test/login.test.js 中填写账号密码!!!');

describe('测试登录是否正常', () => {
  it('手机登录 code 应该等于200', done => {
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836
    const qs = {
      phone: phone,
      password: password
    }

<<<<<<< HEAD
    request.get({url: `${host}/login/cellphone`,qs: qs}, (err, res, body) => {
=======
    request.get({url: `${host}/login/cellphone`, qs: qs}, (err, res, body) => {
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(body.code === 200)
        done()
      }
      else{
        done(err)
      }
    })
  })
})
