const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
app.use(express.json());

dotenv.config({ path: './config.env' });
require('./db/conn');
const PORT = process.env.PORT;


//routerfilelinked
var auth = require('./routes/auth');
app.use('/', auth);
var adminauth = require('./routes/adminauth');
app.use('/', adminauth); 


const middleware = (req, res, next) => {
    console.log(`I'm your middleware`);
    next();
}

app.get('/contact', (req, res) =>  {
    res.cookie('TEst', 'isha');
    res.send('Hello world from Server')
});


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
