const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  //stdin.write("Say: hello");

  const handleUserInput = function (input) {
    console.log(input);
    if (input === "w") {
      //console.log("up")
    }
    else if (input === "a") {
      //console.log("left")
      connection.write("Move: left");
    }
    else if (input === "s") {
      //console.log("down")
      connection.write("Move: down");
    }
    else if (input === "d") {
      //console.log("right")
      connection.write("Move: right");
    }
    else if (input === "\u0003") {
      process.exit();
    }
    else if (input === "q") {
      connection.write("Say: IDK")
    }
    else if (input === "g") {
      connection.write("Say: hi")
    }
  }
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput }
