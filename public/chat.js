var socket = io();
var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');
var username = document.getElementById('username');
var loginDiv = document.getElementById('login');
var chatDiv = document.getElementById('chat');
var topics = document.getElementById('topics'); 

function login() {
    console.log('Logging in with username:', username.value);
    socket.emit('login', username.value);
    loginDiv.style.display = 'none';
    chatDiv.style.display = 'block';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        console.log('Sending message:', input.value);
        socket.emit('chat message', { topic: topics.value, message: input.value });
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    if (msg.topic === topics.value) {
        console.log('Received message:', msg);
        var item = document.createElement('li');
        item.textContent = msg.user + ': ' + msg.message;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    }
});