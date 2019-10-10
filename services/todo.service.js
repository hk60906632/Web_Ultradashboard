var config = require('config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('todos');

var service = {};
//Todolist (currently not working)
service.getAll = getAll;
service.create = create;
service.delete = _delete;

module.exports = service;


function getAll(userID) {
    var deferred = Q.defer();

    db.todos.find({userID: userID}, function (err, todolist) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (todolist) {
            // return user (without hashed password)
            deferred.resolve(todolist);
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(newtodo) {
    var deferred = Q.defer();

    // set user object to userParam without the cleartext password

    db.todos.insert(
        newtodo,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}


function _delete(_id) {
    var deferred = Q.defer();

    db.todos.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}