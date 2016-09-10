
require('./message');

var saflokMessage = message;

saflokMessage.calculateLrc();
saflokMessage.setExpiration("303930393136","32303030");


var messageBuffer = new Buffer(saflokMessage.buildRequestMsg(), 'hex');

console.log(saflokMessage.buildRequestMsg());
console.log(messageBuffer.toString('ascii'));
console.log(messageBuffer.toString('hex'));

