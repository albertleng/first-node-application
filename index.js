/* jshint esversion: 6 */
/* jshint node: true */
'use strict';
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/world', (req, res) => {
    res.send('Hello World POST!');
});

// Add endpoint to take two numbers and return its sum  (POST)
app.post('/add', (req, res) => {
    const {num1, num2} = req.body;
    const sum = num1 + num2;
    console.log(req.body)

    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});