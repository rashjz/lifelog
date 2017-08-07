'use strict';

angular.module('taskManagerApp').factory('ContentService', function ($http) {
        var posts = [];
        var factory = {
            getAllPosts: getAllPosts
        };

        return factory;


        function getAllPosts() {

            return   $http.get("/api/contents/").then(
                function (response) {
                    posts = response.data;
                    return posts;
                },
                function (errResponse) {
                    console.error('Error while loading posts'+errResponse);
                }
            );

        }

    }
);