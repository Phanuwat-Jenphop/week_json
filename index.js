// console.log('Hello World');

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// import express from 'express';
const express = require('express');
const app = express();
app.use(express.json());

const mockUsers = [
    {
        id:1,
        username: 'Art',
        password: '11111',
        fullname: 'Artur',
    },
    {
        id:2,
        username: 'John',
        password: '22222',
        fullname: 'John Doe',
    },
    {
        id:3,
        username: 'Jane',
        password: '33333',
        fullname: 'Jane Doe',
    },
]

app.post('/login', function (req, res) {
    const { username, password } = req.body;
    const user = mockUsers.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).send(
            { 
                success: true, 
                user  // == user: user
            }
        );
    } else {
        res.status(401).send('Wrong username or password');
    }
  });

app.get('/', function (req, res) {
  res.send('Hello World Good night World 50');
});

app.get('/no1', function (req, res) {
    res.send('I am number 1');
  });

  // test >> json format
app.get('/Test', function (req, res) {
    res.send({
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        eyeColor: 'blue'
    });
  });


app.listen(3000);

//# run >>  npx nodemon index.js localhost 3000 
//# auto run >>  npm run dev