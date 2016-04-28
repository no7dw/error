var util = require('util'),
    EventEmitter = require('events').EventEmitter;
 
var Server = function() {
  var self = this;
EventEmitter.call(this); 
  this.on('custom_event', function() {
    self.logSomething('custom_event');
  });
 
  this.logSomething('init');
};
 
util.inherits(Server, EventEmitter);
 
Server.prototype.doSomething = function() {
  this.emit('custom_event');
};
 
Server.prototype.logSomething = function(something) {
  console.log(something);
}
 
var s = new Server();
s.doSomething();
