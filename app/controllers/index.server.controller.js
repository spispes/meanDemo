/**
 * Created by pes on 29.09.15.
 */

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('index', {
        title: 'Hello World'
    });
};