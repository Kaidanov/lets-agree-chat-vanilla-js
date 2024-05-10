const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = {};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve 'index.html' when a GET request is made to the root URL ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    socket.on('login', (username) => {
        users[socket.id] = username;
    });

    socket.on('chat message', (msg) => {
        const username = users[socket.id];
        if (!username) {
            return socket.emit('error', { message: 'No username set' });
        }
        io.emit('chat message', { user: username, topic: msg.topic, message: msg.message });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
        delete users[socket.id];
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});