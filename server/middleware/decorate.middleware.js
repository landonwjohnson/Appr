const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('../auth/local.auth');

function decorate(app) {
    //app.use(express.static(/*directory of build folder*/));
    app.use(bodyParser.JSON());
    app.use(cors());
    app.use(helmet());
    app.use(session({
        secret: 'It belongs in a museum!',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    return app;
}

module.exports = decorate;