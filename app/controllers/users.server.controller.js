/**
 * Created by pes on 01.10.15.
 */

var User = require('mongoose').model('User');


/**
 * this is the JSON Object to be created
 * {
 * "firstName": "First",
 * "lastName": "Last",
 * "email": "user@example.com",
 * "username": "username",
 * "password": "password"
 * }
 * use
 * curl -X POST -H "Content-Type: application/json" -d
 * '{"firstName":"First", "lastName":"Last","email":"user@example.com","user name":"username","password":"password"}'
 * localhost:3000/users
 * to test the request
 * @param req
 * @param res
 * @param next
 */
exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

/**
 * listing all users. Keep in mind to create a user first for testing.
 * @param req
 * @param res
 * @param next
 */
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

/**
 *
 * @param req
 * @param res
 */
exports.read = function(req, res) {
    res.json(req.user);
};

/**
 * find user by ID
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

/**
 * update existing user
 * @param req
 * @param res
 * @param next
 */
exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    })
};