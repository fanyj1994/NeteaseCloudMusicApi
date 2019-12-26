const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

<<<<<<< HEAD
describe("测试获取歌曲是否正常", () => {
  it("歌曲的 url 不应该为空", done => {
=======
describe('测试获取歌曲是否正常', () => {
  it('歌曲的 url 不应该为空', done => {
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836
    const qs = {
      id: 462791935,
      br: 999000
    }

<<<<<<< HEAD
    request.get({url: `${host}/music/url`,qs: qs}, (err, res, body) => {
=======
    request.get({url: `${host}/song/url`, qs: qs}, (err, res, body) => {
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(!!body.data[0].url)
        done()
      }
      else{
        done(err)
      }
    })
  });
});
