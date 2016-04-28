'use strict'

var http = require("http");
var rawBody = require('raw-body')

http.createServer(function (req, res) {
    parseBody(req).then(onbody, onerror);
    function onbody(body) {
      var keys = Object.keys(body);
      res.end(keys.join(','));
    }
    function onerror(err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  }).listen(3000);

  function parseBody(req) {
    return rawBody(req).then(parse);
  }
  function parse(content) {
    var body = JSON.parse(content);
    if (!body || typeof body !== 'object') {
      throw new Error('request body must be object');
    }
    return body;
  }
