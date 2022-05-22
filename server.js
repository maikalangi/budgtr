// DEPENDENCIES
const express = require('express');
const res = require('express/lib/response');
const budget = require('./models/budget');
const methodOverride = require('method-override');

// APP INITIALIZER
const app = express();

// APP CONFIGURATIONS
const port = 3002;

// MIDDLEWARE
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// ===============ROUTES===================

// INDEX
// 1
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// 2
app.get('/budgets/', (req, res)=>{
    res.render('index.ejs', { 
        budget,
        index: req.params.id,
    });
});

// NEW
app.get('/budgets/new/', (req, res)=>{
    res.render('new.ejs');
});

// CREATE
app.post('/budgets/', (req, res)=>{
    budget.push(req.body);
    res.redirect('/budgets/');
});

// SHOW
app.get('/budgets/:id', (req, res)=>{
    res.render('show.ejs', {
        budget: budget[req.params.id],
    });
});

// DELETE
app.delete('/budgets/:id/', (req, res)=>{
    budget.splice(req.params.id, 1);
    res.redirect('/budgets/');
});

// ROUTE LISTENER
app.listen(port, ()=>{
    console.log('listening to port ', port);
});