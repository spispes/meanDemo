/**
 * Created by pes on 29.09.15.
 */

module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};