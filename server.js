const express = require('express');
const budget = require('./models/data')

const app = express();

const port = 3002;

app.listen(port, ()=>{
    console.log('listening to port ', port);
});