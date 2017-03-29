'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!');
});


/*
// logs the request IP and query parameter called myParam
app.get('/', (req, res) => {
    const ip = req.ip;
    console.log(ip);
    const param = req.query.myParam;
    console.log(param);
    res.send('OK');
});
*/
/*
// /path1/:param1 logs the path parameter (value of :param1)
app.get('/path1/:param1', (req, res) => {
    const param = req.params.param1;
    console.log(param);
    res.send('OK');
    // http://localhost:3000/path1/1000  ==> returned 1000
});
*/
/*
// /path2 or /path3 or /path4 log the request. Try at least 2 different types of paths.
app.get(['/path1/:param1', '/path2/:param1'], (req, res) => {
    const param = req.params.param1;
    console.log(param);
    res.send('OK');
    // http://localhost:3000/path1/1000  ==> returned 1000
    // http://localhost:3000/path2/2000  ==> returned 2000
});

// answering with JSON
app.get('/json-response', (req, res) => {
    res.send({id: 1, name: 'My response'});
});

// redirecting
app.get('/to-google', (req, res) => {
    res.redirect('https://google.fi');
});

// send back HTTP status 404
app.get('/not-gonna-find', (req, res) => {
    res.sendStatus(404);
});

// setting cookies
app.get('/give-me-cookie', (req, res) => {
    res.cookie('for', 'you');
    res.send('OK');  // do not forget to send response
});
 */


app.listen(3000);