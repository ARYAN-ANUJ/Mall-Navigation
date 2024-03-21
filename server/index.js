const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",//client address
    methods: ["GET", "POST"],
    allowedHeaders: ["'Content-Type', 'Authorization'"],
    credentials: true
  }
});

app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html'); 
});

io.on('connection', (socket) => {
  console.log('A user connected!');

  socket.on('chat message', (msg) => {
    const message = msg;  // Create message object
    io.emit('chat message', message);
     // Broadcast message to all clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected!');
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
