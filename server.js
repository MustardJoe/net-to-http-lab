const { createServer } = require('net');

const server = createServer(sock => {
  sock.write('I will echo, I am the echo King!');

  sock.on('data', chunk => {
    sock.write(chunk);
  });
});

server.listen(7890);
