var app = angular.module('taskManagerApp', ['ngResource','ui.bootstrap','ngRoute']).config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when("/",
            {
                templateUrl: "../views/task.html",
                controller: "taskManagerController",
                controllerAs: "taskManagerController"
            })
        .when("/user",
            {
                templateUrl: "../views/user.html",
                controller: "UserController",
                controllerAs: "UserController"
            })
        .when('/login', {
            templateUrl: '../../../templates/login.html',
            controller: 'navigation'
        })
        .otherwise({
            templateUrl: "/"
        });
    $locationProvider.hashPrefix('');

});


app.constant('urls', {
    BASE: 'http://localhost:8080/',
    USER_SERVICE_API: 'http://localhost:8080/users/',
    TASK_SERVICE_API: 'http://localhost:8080/tasks/'
});