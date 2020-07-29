const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("data", data => {
    //do smthing when i receive the data
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write("Name: LIM");
  })

  // setTimeout(() => {
  //   conn.write("Move: up"); // the thing that makes the sound
  //   }, connect * 1000); // multipe by it 1000 b/c in ms
  
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // })

  conn.on('connect', () => {
    console.log("connect to server");
  })


  return conn;

  
}



module.exports = {connect};