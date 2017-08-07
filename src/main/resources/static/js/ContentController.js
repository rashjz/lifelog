angular.module('taskManagerApp').controller('ContentController',
    ['$scope', 'ContentService', function ($scope, ContentService) {


        function getAllPosts() {
            ContentService.getAllPosts().then(
                function (response) {
                    console.log(JSON.stringify(response) + " postssssssssssssssssssssssssss")
                    $scope.posts = response;
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.posts = [];
                });
        }

        getAllPosts();


    }
    ]);
/**
 * Created by rasha_000 on 8/7/2017.
 */
