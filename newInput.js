let connection; // undefined

const handleUserInput = function (input) {

  switch (input) {
    case 'q':
      console.log('quit press');
    case '\u0003':
      process.exit();
      break;

    case 'w':
      console.log('w press');
      connection.write("Move: up");
      break;

    case 'd':
      console.log('d press');
      connection.write("Move: right");
      break;

    case 's':
      console.log('s press');
      connection.write("Move: down");
      break;

    case 'a':
      console.log('a press');
      connection.write("Move: left");
      break;

    case 'g':
      console.log('g press');
      connection.write("hi");
      break;

    case 'h':
      console.log('h press');
      connection.write("coo");
      break;
  }
}

module.exports = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}


// module.exports = { setupInput };