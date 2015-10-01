/**
 * Created by pes on 01.10.15.
 */

var config = require('./config'),
    mongoose = require('mongoose');
/**
 *
 * @returns {Mongoose}
 */
module.exports = function() {
    var db = mongoose.connect(config.db);


     //define schemas
    require('../app/models/user.server.model');

    return db;
};