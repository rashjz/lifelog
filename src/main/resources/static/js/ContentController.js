angular.module('taskManagerApp').controller('ContentController',
    ['$scope', 'ContentService', function ($scope, ContentService) {
        $scope.searchTerm = '';
        $scope.totalItems ;
        $scope.pageNumb = 0;
        $scope.pagesize = 3;

        function getAllPosts() {
            ContentService.getAllPosts($scope.searchTerm, $scope.pageNumb, $scope.pagesize).then(
                function (response) {
                    // console.log(JSON.stringify(response) + " postssssssssssssssssssssssssss")
                    $scope.posts = response.content;
                    $scope.totalItems = 6;
                    $scope.pageNumb = 1;
                    $scope.pagesize = 2;
                    console.log()
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.posts = [];
                });
        }

        getAllPosts();
        $scope.$watch("page", function() {
            getAllPosts();
        });


    }
    ]);
/**
 * Created by rasha_000 on 8/7/2017.
 */
