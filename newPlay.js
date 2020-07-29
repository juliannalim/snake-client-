const net = require('net');
const { setupInput } = require('./newInput');
const { connect } = require('./newclient');

console.log('Connecting ...');
connect();
setupInput();