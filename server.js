// DEPENDENCIES
const express = require('express');
const res = require('express/lib/response');
const budget = require('./models/budget');
const bodyParser = require('body-parser');

// APP INITIALIZER
const app = express();

// APP CONFIGURATIONS
const port = 3002;

// MIDDLEWARE
app.use(express.static('public'));
// app.use(bodyParser(''));

// ===============ROUTES===================

// INDEX
// 1
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// 2
app.get('/budget/', (req, res)=>{
    res.render('index.ejs', { budget });
});

// NEW
app.get('/budget/new/', (req, res)=>{
    res.render('new.ejs');
});

// CREATE


// SHOW
app.get('/budget/:id', (req, res)=>{
    res.render('show.ejs', {
        budget: budget[req.params.id]
    });
});

// ROUTE LISTENER
app.listen(port, ()=>{
    console.log('listening to port ', port);
});