'use strict';
const express = require('express');
const app = express();
const moment = require('moment');

// Assignment 2: Middleware
const requestData =  (req, res, next) => {
    console.log('Path: ' + req.path);
    console.log('Timestamp: ' + moment(Date.now()).format());
    const ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    console.log('IP address: ' + ip);
    console.log('User agent: ' + req.headers['user-agent']);
    next();
};

// Assignment 3: Error handling
const clientErrorHandler  =  (err, req, res, next) => {
    res.status(503).send('Service Unavailable');
    next();
};

app.use(requestData);
app.use(clientErrorHandler);

app.get('/',  (req, res) => {
    res.send('OK');
});

app.listen(3000);