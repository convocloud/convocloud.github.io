  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyB8T1mjBWEgSqlHZoLTbZxqTV4a-2BGaLk",
    authDomain: "convocloud-fbc.firebaseapp.com",
    projectId: "convocloud-fbc",
    storageBucket: "convocloud-fbc.appspot.com",
    messagingSenderId: "718145021278",
    appId: "1:718145021278:web:162b1356cdeed398135bcf",
    measurementId: "G-YTBEPB3BFH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DOM elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to render messages
function renderMessage(doc) {
    const message = document.createElement('div');
    message.textContent = doc.data().text;
    messagesDiv.appendChild(message);
}

// Get messages from Firestore
db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
    snapshot.forEach(doc => {
        renderMessage(doc);
    });
});

// Send message
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        db.collection('messages').add({
            text: messageText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        messageInput.value = '';
    }
});
