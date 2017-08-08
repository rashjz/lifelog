angular.module('taskManagerApp').controller('ContentController',
    ['$scope', 'ContentService', function ($scope, ContentService) {
        $scope.searchTerm = '';
        $scope.totalItems;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 3;

        function getAllPosts() {
            ContentService.getAllPosts($scope.searchTerm, $scope.currentPage - 1, $scope.itemsPerPage).then(
                function (response) {
                    $scope.posts = response.content;
                    $scope.totalItems = response.totalElements;
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.posts = [];
                });
        }

        $scope.$watch("currentPage", function () {
            console.log('current page and itemsperpage  ' + $scope.currentPage + ' ' + $scope.itemsPerPage);
            getAllPosts();
        });


    }
    ]);
