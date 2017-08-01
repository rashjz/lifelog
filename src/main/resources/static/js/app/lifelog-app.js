var app = angular.module('taskManagerApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
            {
                templateUrl: "/",
                controller: "taskManagerController",
                controllerAs: "taskManagerController"
            })
         .otherwise({
            templateUrl: "/"
        });
    $locationProvider.hashPrefix('');

});

app.constant('urls', {
    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API: 'http://localhost:8080/SpringBootCRUDApp/api/user/',
    TASK_SERVICE_API: 'http://localhost:8080/tasks/'
});