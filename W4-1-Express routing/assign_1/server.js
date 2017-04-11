'use strict';
const express = require('express');
const app = express();

const userArray = [
    { id: 1, name:"John", age:30 },
    { id: 2, name:"Alex", age:25 },
    { id: 3, name:"Ali", age:20 }
];


app.get('/user/:id', (req, res) => {
        let usrId = req.params.id;
        let  user = 0;
        //const usr = userArray.filter((usr) => usr.id ===  usrId);
        for(user of userArray){
            if(user.id == usrId){
                break;
            }
        }
        res.send('Getting user by id :' + JSON.stringify(user));
        //res.send(`Get a user of id: ${usrId}`);
    });

app.put('/user/*', (req, res) => {
        const queryparams = req.query;
        // .... updating logic here
        res.send('Updating user with :' + JSON.stringify(queryparams));
    });

app.post('/user/*', (req, res) => {
        const queryparams = req.query;
        // .... adding logic here
        res.send('Adding user with :' + JSON.stringify(queryparams));
    });

app.delete('/user/:id', (req, res) => {
    let usrId = req.params.id;
    let  user = 0;
    for(user of userArray){
        if(user.id == usrId){
            break;
        }
    }
    // .... deleting logic here
    res.send('Deleting user by id :' + JSON.stringify(user));
});

app.listen(3000);