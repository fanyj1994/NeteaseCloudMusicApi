const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

describe('测试获取评论是否正常', () => {
  it('数据的 code 应该为200', done => {
    const qs = {
      id: 32311
    }

<<<<<<< HEAD
    request.get({url: `${host}/comment/album`,qs: qs}, (err, res, body) => {
=======
    request.get({url: `${host}/comment/album`, qs: qs}, (err, res, body) => {
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
