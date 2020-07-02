 const net = require('net');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: '135.23.222.148',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 
//   conn.on("data", data => {
//     //do smthing when i receive the data
//     console.log(data);
//   });
//   return conn;
// }

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (input) {
  console.log(input);
 if (input === "\u0003")
 process.exit() 
}

setupInput();
// const { connect } = require('./client');
// console.log('Connecting ...');
//connect();
