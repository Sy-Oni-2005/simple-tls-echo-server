const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    socket.write(data); // Echo back any data received
  });
  
  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

const PORT = process.env.PORT || 443;

server.listen(PORT, () => {
  console.log(`Echo server listening on port ${PORT}`);
});
