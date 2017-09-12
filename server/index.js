'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(body.json());
app.use(cookie());

const users = {};
const ids = {};

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users[username] !== password) {
        return res.status(400).end();
    }

    if (!users[username]) {
        return res.status(401).end();
    }

    const id = uuid();
    ids[id] = username;

    res.cookie('id', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.json({id});
});

app.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users[username]) {
        return res.status(400).end();
    }

    users[username] = password;

    res.json({'username': username});
});

app.post('/profile', function (req, res) {
    const id = req.cookies['id'];
    const username = ids[id];

    if (!username || !users[username]) {
        return res.status(401).end();
    }

    res.json({'username': username});
});

app.listen(process.env.PORT || '8080');