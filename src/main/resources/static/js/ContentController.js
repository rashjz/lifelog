angular.module('taskManagerApp').controller('ContentController',
    ['$scope', 'ContentService', function ($scope, ContentService) {

        $scope.searchTerm = '';
        $scope.totalItems;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 3;
        $scope.content = {};
        $scope.contentType = {};

        $scope.change = function (text) {
            getAllPosts()
        };

        $scope.getContentType = function (contentType) {
            console.log(contentType);
            // alert(JSON.stringify(contentType));
        };

        getAllContentTypes();

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

        function addNewContent() {
            ContentService.addNewContent($scope.content).then(
                function (response) {
                    console.log('responseeeeeeeeeee ' + JSON.stringify(response));
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.posts = [];
                });
        }

        function getAllContentTypes() {
            ContentService.loadContentTypes().then(
                function (response) {
                    $scope.contentTypes = response.data._embedded.contentTypes;
                    console.log(JSON.stringify($scope.contentTypes) + '***************************');
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.contentTypes = [];
                });
        }

        $scope.editContent = function editContent() {
            console.log('console edit content ' + JSON.stringify($scope.contentType));
            // alert('selected : ' + JSON.stringify($scope.content));
            // addNewContent();
        }


        $scope.$watch("currentPage", function () {
            console.log('current page and itemsperpage  ' + $scope.currentPage + ' ' + $scope.itemsPerPage);
            getAllPosts();
        });


        $scope.selectRow = function (content) {
            console.log(JSON.stringify(content) + " ---------------------");
            $scope.content = content;

        };


    }
    ]);
