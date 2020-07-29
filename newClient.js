const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("data", function (message) {
    //do smthing when i receive the data
    // prints you ded cuz you idled from the server.... 
    console.log(message);
  });

  conn.on('connect', function (connect) {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', function () {
    // find a refactor this so you can input the username
    conn.write('Name: bug');
  });

  // conn.on('connect', () => {
  // delay = 0;
  //   conn.write('Move: up');
  // setTimeout(() => {
  //   conn.write('Move: down'), delay;
  // }, delay += 200);
  // conn.write('Move: left');
  // conn.write('Move: right');
  // })
  return conn;
};


module.exports = { connect };