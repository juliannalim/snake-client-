let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (input) {
    if (input === 'w') {
      connection.write("Move: up");
    }

    else if (input === 's') {
      connection.write("Move: down");
    }

    else if (input === 'd') {
      connection.write('Move: right');
    }

    else if (input === 'a') {
      connection.write('Move: left');
    }
    // control C to exit 
    else if (input === "\u0003") {
      process.exit()
    }
  }
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };