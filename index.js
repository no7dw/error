var urllib = require('urllib');
var EventEmitter = require('events').EventEmitter;
var util = require('util')
var fs = require('fs');

function Checker(url, path) {
      this.url = url;
      this.path = path;
      this.onerror = this.onerror.bind(this);
      this.start();
      EventEmitter.call(this);  // 继承 EventEmitter
};
util.inherits(Checker, EventEmitter);

Checker.prototype.shoot = function () {
  var self = this;
  return urllib.request(self.url)
    .then(function (res) {
      console.log('shoot');
      return fs.writeFile(self.path, res.data);
    });
};
Checker.prototype.start = function () {
  var self = this;
  setInterval(function () {
    self.shoot().catch(self.onerror); // 捕获 error 时间
  }, 1000);
};
Checker.prototype.onerror = function (err) {
  console.log('onerror', err);
  this.emit('error', err);  // 触发 error 事件
};

var checker = new Checker('http://www.tmall.com', 'tmall.html');
                
