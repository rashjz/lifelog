var app = angular.module('taskManagerApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
            {
                templateUrl: "/",
                controller: "taskManagerController",
                controllerAs: "taskManagerController"
            })
        .when("/user",
            {
                templateUrl: "../../views/userView.html",
                controller: "UserController",
                controllerAs: "UserController"
            })
        .when('/login', {
        templateUrl: 'login.html',
        controller: 'navigation'
    })
        .otherwise({
            templateUrl: "/"
        });
    $locationProvider.hashPrefix('');

});

app.constant('urls', {
    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API: 'http://localhost:8080/users/',
    TASK_SERVICE_API: 'http://localhost:8080/tasks/'
});