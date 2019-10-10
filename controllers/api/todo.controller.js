var config = require('config.json');
var express = require('express');
var router = express.Router();
var todoService = require('services/todo.service');

// routes
router.post('/createtodo', createTodo);
router.get('/getalltodo', getAllTodo);
router.delete('/:_id', deleteTodo);

module.exports = router;

function createTodo(req, res) {
    todoService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAllTodo(req, res) {
    todoService.getAll(req.userID)
        .then(function (todolist) {
            if (todolist) {
                res.send(todolist);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteTodo(req, res) {
    var todoID = req.todo.sub;

    todoService.delete(todoID)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}