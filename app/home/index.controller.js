(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        $scope.formData = {};

        vm.user = null;

        // vm.deleteTodo = deleteTodo;

        // vm.createTodo = createTodo;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
                
                // TodoService.GetAll(vm.user._id).then(function (todolist) {
                //     $scope.todolist = todolist;});
            });
        }

        // function deleteTodo(_id) {
        //     TodoService.Delete(_id).then(function () {
        //         TodoService.GetAll(vm.user._id).then(function (todolist) {
        //             $scope.todolist = todolist;});
        //     });
        // }

        // function createTodo() {
        //     var newtodo;
        //     newtodo.text = $scope.formData.text;
        //     newtodo.userID = vm.user._id;
        //     TodoService.Create(newtodo).then(function () {
        //         TodoService.GetAll(vm.user._id).then(function (todolist) {
        //             $scope.todolist = todolist;});
        //     });
        // }

        
    }

})();