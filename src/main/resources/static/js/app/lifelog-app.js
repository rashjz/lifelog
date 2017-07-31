var app = angular.module('taskManagerApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
            {
                templateUrl: "index",
                controller: "taskManagerController",
                controllerAs: "taskManagerController"
            })
        /*  .when("/todo",
              {
                  templateUrl: "/templates/todo.html",
                  controller: "ToDoCtrl"
              })
              */
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