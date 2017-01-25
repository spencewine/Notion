'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const passport = require('passport');
const { User } = require('./models');
const session = require('express-session');

app.use(logger('combined'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('dist'));
app.use(express.static('public'));

/* passport */
app.use(passport.initialize());
app.use(passport.session());


// passport.serializeUser((user, done) => {
//   /* passport id is saved in the session and is later used to retrieve the whole object via deserializeUser function */
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id)
//   .then((user) => {

//   })
// })



app.use(routes);

module.exports = app;
