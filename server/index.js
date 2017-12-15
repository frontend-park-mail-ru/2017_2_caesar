const express = require('express');

const app = express();
app.use(express.static('public'));
app.use('/login', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/profile', express.static('public'));
app.use('/rating', express.static('public'));
app.use('/singleplayer-online', express.static('public'));
app.use('/singleplayer-offline', express.static('public'));
app.use('/multiplayer', express.static('public'));

app.listen(process.env.PORT || '8080');
