const express = require('express');
const bodyParser = require('body-parser');
const createRoutes = require('./routes');
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAnKkFpCyQFzXKVsw6uYculXLN-6DH_PJQ",
    authDomain: "portafolio-12481.firebaseapp.com",
    databaseURL: "https://portafolio-12481.firebaseio.com",
    projectId: "portafolio-12481",
    storageBucket: "portafolio-12481.appspot.com",
    messagingSenderId: "371763924698",
    appId: "1:371763924698:web:e42c681f3e5f5edd0cdfe3",
    measurementId: "G-Y5SZZ040Q6"
};

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`App corriendo en puerto ${port}`);
    firebase.initializeApp(firebaseConfig);
    createRoutes(app, firebase);
});

app.use(express.static('public'));