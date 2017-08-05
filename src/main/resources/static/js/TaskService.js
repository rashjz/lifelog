'use strict';

angular.module('taskManagerApp').factory('TaskService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllTasks: loadAllTasks,
                getAllUsers: getAllTasks,
                getUser: getTask,
                createUser: createTask,
                updateUser: updateTask,
                removeUser: removeTask
            };

            return factory;

            function loadAllTasks() {
                console.log('Fetching all tasks');
                var deferred = $q.defer();
                $http.get(urls.TASK_SERVICE_API + 'search/findByTaskArchived?archivedfalse=0')
                    .then(
                        function (response) {
                            console.log('Fetched successfully all ');
                            $localStorage.tasks = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading tasks');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllTasks() {
                return $localStorage.tasks;
            }

            function getTask(id) {
                console.log('Fetching User with id :' + id);
                var deferred = $q.defer();
                $http.get(urls.TASK_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Tasks with id :' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Tasks with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createTask(user) {
                if ($scope.taskName == "" || $scope.taskDesc == "" || $scope.taskPriority == "" || $scope.taskStatus == "") {
                    alert("Insufficient Data! Please provide values for task name, description, priortiy and status");
                }

                console.log('Creating User');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, {
                    taskName: $scope.taskName,
                    taskDescription: $scope.taskDesc,
                    taskPriority: $scope.taskPriority,
                    taskStatus: $scope.taskStatus
                })
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating User : ' + errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );


                return deferred.promise;
            }

            function updateTask(user, id) {
                console.log('Updating User with id ' + id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, user)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating User with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeTask(id) {
                console.log('Removing Task with id ' + id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing User with id :' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);