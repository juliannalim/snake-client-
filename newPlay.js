const net = require('net');
const { connect } = require('./newclient');
const { setupInput } = require('./newInput');

console.log('Connecting ...');
// connect();

setupInput(connect());