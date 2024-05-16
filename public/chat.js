/**
 * Client-side JavaScript for chat application.
 */

var socket = io();

var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');
var username = document.getElementById('username');
var loginDiv = document.getElementById('login');
var chatDiv = document.getElementById('chat');
var topics = document.getElementById('topics');

// Store all messages
var allMessages = [];

/**
 * Function to handle the login process.
 * Emits a 'login' event to the server with the entered username.
 * Hides the login div and shows the chat div.
 */
function login() {
    console.log('Logging in with username:', username.value);
    socket.emit('login', username.value);
    loginDiv.style.display = 'none';
    chatDiv.style.display = 'block';
}

/**
 * Event listener for the form submission.
 * Sends a chat message to the server if the input value is not empty.
 */
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        console.log('Sending message:', input.value);
        socket.emit('chat message', { topic: topics.value, message: input.value });

        fetch('/check-fact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: input.value }),
        })
        .then(response => response.json())
        .then(data => {
            var item = document.createElement('li');
            item.textContent = 'OpenAI: ' + data.response;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
        })
        .catch(error => console.error('Error:', error));

        input.value = '';
    }
});

/**
 * Event listener for receiving chat messages from the server.
 * Stores the received message and updates the displayed messages.
 */
socket.on('chat message', function(msg) {
    console.log('Received message:', msg);
    allMessages.push(msg);
    displayMessages();
});

/**
 * Function to display messages based on the selected topic.
 */
function displayMessages() {
    // Clear the current messages
    messages.innerHTML = '';

    // Get the selected topic
    var selectedTopic = topics.value;

    // Filter messages based on the selected topic
    var filteredMessages = allMessages.filter(message => message.topic === selectedTopic);

    // Display the filtered messages
    filteredMessages.forEach(message => {
        var item = document.createElement('li');
        item.textContent = message.user + ': ' + message.message;
        messages.appendChild(item);
    });

    // Scroll to the bottom
    window.scrollTo(0, document.body.scrollHeight);
}

// Event listener for the change event on the topics select element
topics.addEventListener('change', displayMessages);