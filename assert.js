var assert = require("assert");
var net = require("net");
function connect(ip4addr, tcpPort, timeout, callback)
{
    assert.equal(typeof (ip4addr), 'string',
        "argument 'ip4addr' must be a string");
    assert.ok(net.isIPv4(ip4addr),
        "argument 'ip4addr' must be a valid IPv4 address");
    assert.equal(typeof (tcpPort), 'number',
        "argument 'tcpPort' must be a number");
    assert.ok(!isNaN(tcpPort) && tcpPort > 0 && tcpPort < 65536,
        "argument 'tcpPort' must be a positive integer between 1 and 65535");
    assert.equal(typeof (timeout), 'number',
        "argument 'timeout' must be a number");
    assert.ok(!isNaN(timeout) && timeout > 0,
        "argument 'timeout' must be a positive integer");
    assert.equal(typeof (callback), 'function');

    /* do work */
}
try{
    connect("192.168.1.123", 90, 300, function(){console.log("done");});
    connect("192.168.1.123", 90, "300", function(){console.log("done");});
}
catch(e){
  console.error("err:",e);
}
console.log("end");
