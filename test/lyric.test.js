const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

<<<<<<< HEAD
describe("测试获取歌词是否正常", () => {
  it("数据应该有 lrc 字段", done => {
=======
describe('测试获取歌词是否正常', () => {
  it('数据应该有 lrc 字段', done => {
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836
    const qs = {
      id: 347230
    }

<<<<<<< HEAD
    request.get({url: `${host}/lyric`,qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(typeof body.lrc !== "undefined")
=======
    request.get({url: `${host}/lyric`, qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(typeof body.lrc !== 'undefined')
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836
        done()
      }
      else{
        done(err)
      }
    })
  })
})
