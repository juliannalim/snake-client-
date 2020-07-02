const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;

  const handleUserInput = function (input) {
    console.log(input);
    if (input === "w") {
      //console.log("up")
      connection.write("Move: up")
    }
    else if (input === "a") {
      //console.log("left")
      connection.write("Move: left")
    }
    else if (input === "s") {
      //console.log("down")
      connection.write("Move: down")
    }
    else if (input === "d") {
      //console.log("right")
      connection.write("Move: right")
    }
    else if (input === "\u0003") {
      process.exit()
    }
  }
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput }
