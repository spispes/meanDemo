/**
 * Created by pes on 29.09.15.
 */
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function() {
    var app = express();
    // ********************************************************************//
    // ****************** Configure the proper environment ****************//
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    // ********************************************************************//
    // ****************** End environment configuration *******************//

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.set('views', './app/views');

    app.set('view engine', 'ejs');

    // ********************************************************************//
    // ****************** Define Routes for the application ****************//

    require('../app/routes/index.server.routes.js')(app);
    require("../app/routes/users.server.routes.js")(app);

    // ********************************************************************//
    // ****************** End Routes ****************//

    app.use(express.static('./public'));

    return app;
};