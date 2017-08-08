'use strict';

angular.module('taskManagerApp').factory('ContentService', function ($http) {
        var posts = [];
        var factory = {
            getAllPosts: getAllPosts
        };

        return factory;


        function getAllPosts(searchTerm,page,size) {

            return   $http.get('/api/contents?searchTerm='+searchTerm+'&page='+page+'&size='+size).then(
                function (response) {
                    console.log("--------------"+searchTerm+" "+page+" "+size);
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