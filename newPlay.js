const { connect } = require('./newclient');
const setupInput = require('./newInput');

console.log('Connecting ...');
// connect();
const conn = connect();

setupInput(conn);