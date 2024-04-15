/* jshint esversion: 6 */
/* jshint node: true */
'use strict';
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/world', (req, res) => {
    res.send('Hello World POST!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});