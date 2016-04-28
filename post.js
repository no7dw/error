var http = require("http");
var rawBody = require('raw-body')
http.createServer(function (req, res) {
  parseBody(req, function onBody(err, body) {
    if (err) {
      res.statusCode = 500;
      return res.end(err.message);
    }
    var keys = Object.keys(body);
    res.end(keys.join(','));
  })
}).listen(3000);

function parseBody(req, callback) {
  // 获取原始的请求 body
  rawBody(req, function (err, content) {
    if (err) return callback(err);

    var body = {};
    try {
      body = JSON.parse(content);
    } catch (err) {
      return callback(err);
    }
    return callback(null, body);
  });
}
