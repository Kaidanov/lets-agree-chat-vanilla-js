
/**
 * Initializes a socket connection.
 * @type {SocketIO}
 */
const socket = io();

/**
 * Handles the form submission event.
 * @param {Event} e - The form submission event.
 * @returns {boolean} - Returns false to prevent page reloading.
 */
$('form').submit(function(e) {
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

/**
 * Listens for incoming chat messages.
 * @param {string} msg - The received chat message.
 */
socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});