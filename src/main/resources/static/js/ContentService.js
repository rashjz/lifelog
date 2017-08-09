'use strict';

angular.module('taskManagerApp').factory('ContentService', function ($http) {
        var posts = [];

        var factory = {
            getAllPosts: getAllPosts,
            loadContentTypes: loadContentTypes,
            addNewContent: addNewContent
        };

        return factory;


        function getAllPosts(searchTerm, page, size) {

            return $http.get('/api/contents?searchTerm=' + searchTerm + '&page=' + page + '&size=' + size).then(
                function (response) {
                    console.log("--------------" + searchTerm + " " + page + " " + size);
                    posts = response.data;
                    return posts;
                },
                function (errResponse) {
                    console.error('Error while loading posts' + errResponse);
                }
            );

        }

        function loadContentTypes() {

            return $http.get('/contentTypes').then(
                function (response) {
                    console.log("--------------" + response);
                    return response;
                },
                function (errResponse) {
                    console.error('Error while loading posts' + errResponse);
                }
            );
        }

    function addNewContent(content) {

        return $http.post('/api/contentadd/',content).then(
            function (response) {
                console.log("--------------" + response);
                return response;
            },
            function (errResponse) {
                console.error('Error while loading posts' + errResponse);
            }
        );
    }

    }
);