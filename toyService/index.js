const express = require('express');
const app = express();
const debug = require('debug')('toyService:server');

// Define your routes and middleware here
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Set up any additional routes or middleware as needed

module.exports = app;
