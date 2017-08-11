'use strict';

angular.module('taskManagerApp').factory('ContentService', function ($http) {
        var posts = [];

        var factory = {
            getAllPosts: getAllPosts,
            loadContentTypes: loadContentTypes,
            updateContent: updateContent,
            deleteContent: deleteContent
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

        function updateContent(content) {

            return $http.post('/api/contentupdate/', content).then(
                function (response) {
                    console.log("--------------" + response);
                    return response;
                },
                function (errResponse) {
                    console.error('Error while loading posts' + errResponse);
                }
            );
        }

        function deleteContent(id) {
            return $http.delete('/api/contentdelete/'+ id).then(
                function (response) {
                    console.log('response delete content :::: '+response);
                    return response;
                },
                function (errResponse) {
                    console.error('Error while loading posts' + errResponse);
                }
            );
        }

    }
);