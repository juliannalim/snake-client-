const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (input) => {
  // control C to exit 
  if (input === "\u0003") {
    process.exit()
  }
}

module.exports = { setupInput };