// var token = $("meta[name='_csrf']").attr("content");
// var header = $("meta[name='_csrf_header']").attr("content");
var app = angular.module('taskManagerApp', ['ngRoute']).config(function ($routeProvider, $locationProvider,$httpProvider) {
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
    // $httpProvider.defaults.headers.common['_csrf'] = token;

});

app.constant('urls', {
    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API: 'http://localhost:8080/users/',
    TASK_SERVICE_API: 'http://localhost:8080/tasks/'
});