var Checker = require("./checkAlive");
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 

event.on("checkerror", function(err){
    //handle on the caller level
    console.log("in caller", err);
});
var checker = new Checker('http://www.tmall.com', 'tmall.html');

