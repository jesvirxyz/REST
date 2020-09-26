const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const blogRoute = require('./routes/blog');
const { urlencoded } = require('body-parser');
app.use('/', blogRoute);

// Databse Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to Databse');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Connected to server 3000');
});
