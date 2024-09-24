const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const ConnectMongoose = require('./init/mongodb.js');
const todoroute = require('./routes/todo.js');

dotenv.config()
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/',todoroute);


ConnectMongoose();

module.exports = app;