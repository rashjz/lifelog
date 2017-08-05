'use strict';

angular.module('taskManagerApp').factory('UserService', function ($http) {
        var users = [];
        var factory = {

            loadAllUsers: loadAllUsers
            // ,
            // getAllUsers: getAllUsers,
            // getUser: getUser,
            // createUser: createUser,
            // updateUser: updateUser,
            // removeUser: removeUser
        };

        return factory;


        function loadAllUsers() {

            return   $http.get("/api/user/").then(
                function (response) {
                    // console.log('Fetched successfully all users' + JSON.stringify(response.data._embedded.users));
                    // users = response.data._embedded.users;
                    users = response;
                    return users;
                },
                function (errResponse) {
                    console.error('Error while loading users');
                }
            );

        }

        // function getAllUsers(){
        //     return $localStorage.users;
        // }
        /*
         function getUser(id) {
         console.log('Fetching User with id :'+id);
         var deferred = $q.defer();
         $http.get(urls.USER_SERVICE_API + id)
         .then(
         function (response) {
         console.log('Fetched successfully User with id :'+id);
         deferred.resolve(response.data);
         },
         function (errResponse) {
         console.error('Error while loading user with id :'+id);
         deferred.reject(errResponse);
         }
         );
         return deferred.promise;
         }

         function createUser(user) {
         console.log('Creating User');
         var deferred = $q.defer();
         $http.post(urls.USER_SERVICE_API, user)
         .then(
         function (response) {
         loadAllUsers();
         deferred.resolve(response.data);
         },
         function (errResponse) {
         console.error('Error while creating User : '+errResponse.data.errorMessage);
         deferred.reject(errResponse);
         }
         );
         return deferred.promise;
         }

         function updateUser(user, id) {
         console.log('Updating User with id '+id);
         var deferred = $q.defer();
         $http.put(urls.USER_SERVICE_API + id, user)
         .then(
         function (response) {
         loadAllUsers();
         deferred.resolve(response.data);
         },
         function (errResponse) {
         console.error('Error while updating User with id :'+id);
         deferred.reject(errResponse);
         }
         );
         return deferred.promise;
         }

         function removeUser(id) {
         console.log('Removing User with id '+id);
         var deferred = $q.defer();
         $http.delete(urls.USER_SERVICE_API + id)
         .then(
         function (response) {
         loadAllUsers();
         deferred.resolve(response.data);
         },
         function (errResponse) {
         console.error('Error while removing User with id :'+id);
         deferred.reject(errResponse);
         }
         );
         return deferred.promise;
         }
         */


    }
);