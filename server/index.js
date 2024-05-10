
/**
 * @file This file contains the server-side code for a chat application using Express.js and Socket.IO.
 * It serves static files, handles user connections, and facilitates real-time messaging between clients.
 */

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

/**
 * Handles new client connections and sets up event listeners for various socket events.
 * @param {Socket} socket - The socket object representing the client connection.
 */
io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    /**
     * Handles the 'login' event emitted by the client when a user logs in.
     * Stores the username associated with the socket ID in the 'users' object.
     * @param {string} username - The username of the logged-in user.
     */
    socket.on('login', (username) => {
        users[socket.id] = username;
    });

    /**
     * Handles the 'chat message' event emitted by the client when a new chat message is sent.
     * Broadcasts the chat message to all connected clients, including the sender's username.
     * @param {Object} msg - The chat message object containing the topic and message.
     * @param {string} msg.topic - The topic of the chat message.
     * @param {string} msg.message - The content of the chat message.
     */
    socket.on('chat message', (msg) => {
        const username = users[socket.id];
        if (!username) {
            return socket.emit('error', { message: 'No username set' });
        }
        io.emit('chat message', { user: username, topic: msg.topic, message: msg.message });
    });

    /**
     * Handles the 'disconnect' event emitted by the client when the connection is closed.
     * Removes the user from the 'users' object.
     */
    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
        delete users[socket.id];
    });
});

const port = process.env.PORT || 3000;

/**
 * Starts the server and listens for incoming connections on the specified port.
 */
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});