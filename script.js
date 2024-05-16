function sendMessage() {
    const inputBox = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const messageText = inputBox.value.trim();

    if (messageText !== '') {
        // Remove all previous messages
        while (chatBox.firstChild) {
            chatBox.removeChild(chatBox.firstChild);
        }

        // Hide input box and send button after sending the message
        const inputBoxContainer = document.querySelector('.input-box');
        inputBoxContainer.style.display = 'none';

        // Show center container
        const centerBackground = document.getElementById('center-background');
        const centerContainer = document.getElementById('center-container');
        centerBackground.style.display = 'block';
        centerContainer.style.display = 'flex';

        // Hide chat box
        chatBox.style.display = 'none';
        
        // Show central message and explore button
        const centerMessage = document.getElementById('center-message');
        centerMessage.textContent = 'Just Silence, join Stellar Chairs.';
    }
}

function redirectToLink() {
    window.location.href = 'https:discord.gg/valoranthacks'; // Reemplaza 'https://www.example.com' con tu enlace real
}
