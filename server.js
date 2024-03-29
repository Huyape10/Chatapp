const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
});

// nhận rồi truyền dữ liệu lên các clients 
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
// 

server.listen(3000, () => {
 console.log('server running at http://localhost:3000\n');
});