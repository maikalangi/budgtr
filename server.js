const express = require('express');
const res = require('express/lib/response');
const budget = require('./models/budget')

const app = express();

const port = 3002;
// Middleware
app.use(express.static('public'));

// Index
app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/budget/', (req, res)=>{
    res.render('index.ejs', { budget });
});

// New
app.get('/budget/new/', (req, res)=>{
    res.render('new.ejs');
});

// Create

// Show
app.get('/budget/:id', (req, res)=>{
    res.render('show.ejs', {
        budget: budget[req.params.id]
    });
});


app.listen(port, ()=>{
    console.log('listening to port ', port);
});