/**
 * Created by pes on 29.09.15.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
    res.render('index', {
        title: 'Welcome',
        userFullName: req.user ? req.user.fullName : ''
    });
};