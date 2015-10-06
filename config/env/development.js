/**
 * Created by pes on 30.09.15.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'xxx',
        clientSecret: 'xxxxxx',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'Twitter Application ID',
        clientSecret: 'Twitter Application Secret',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};