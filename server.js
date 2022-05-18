const express = require('express');
const res = require('express/lib/response');
const budget = require('./models/budget')

const app = express();

const port = 3002;

// Index
app.get('/budgets/', (req, res)=>{
    res.render('index.ejs', { budget });
});

// New
app.get('/budgets/new/', (req, res)=>{

})

// Create

// Show
app.get('/budgets/:id', (req, res)=>{
    res.render('show.ejs', {
        budget: budget[req.params.id]
    });
});

app.listen(port, ()=>{
    console.log('listening to port ', port);
});