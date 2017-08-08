// var token = $("meta[name='_csrf']").attr("content");
// var header = $("meta[name='_csrf_header']").attr("content");
// angular.module('taskManagerApp').factory('XSRFInterceptor', function ($cookies, $log) {
//         var XSRFInterceptor = {
//             request: function (config) {
//                 var token = $cookies.get('XSRF-TOKEN');
//
//                 if (token) {
//                     config.headers['X-XSRF-TOKEN'] = token;
//                     $log.info("X-XSRF-TOKEN: " + token);
//                 }
//                 return config;
//             }
//         };
//         return XSRFInterceptor;
//     });


var app = angular.module('taskManagerApp', ['ngRoute','ui.bootstrap']).config(function ($routeProvider, $locationProvider, $httpProvider) {
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

    // $httpProvider.defaults.withCredentials = true;
    // $httpProvider.interceptors.push('XSRFInterceptor');

});


app.constant('urls', {
    BASE: 'http://localhost:8080/',
    USER_SERVICE_API: 'http://localhost:8080/users/',
    TASK_SERVICE_API: 'http://localhost:8080/tasks/'
});