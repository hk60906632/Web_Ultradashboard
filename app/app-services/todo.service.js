(function () {
    'use strict';

    angular
        .module('app')
        .factory('TodoService', Service);

    function Service($http, $q) {
        var service = {};

        service.GetAll = GetAll;
        service.Create = Create;
        service.Delete = Delete;

        return service;

        function GetAll(userID) {
            return $http.get('/api/todos/getalltodo').then(handleSuccess, handleError);
        }

        function Create(newtodo) {
            return $http.post('/api/createtodo', newtodo).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/todos/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
