angular.module('taskManagerApp').controller('ContentController',
    ['$scope', 'ContentService', 'uploadService', '$uibModal', function ($scope, ContentService, uploadService, $uibModal) {

        $scope.searchTerm = '';
        $scope.totalItems;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 3;
        $scope.content = {};


        // $scope.$watch('content.insertDate', function (val) {
        //     console.log(val)
        // });
        //loading types
        getAllContentTypes();

        $scope.change = function (text) {
            getAllPosts()
        };


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

        $scope.editContent = function editContent() {
            ContentService.updateContent($scope.content).then(
                function (response) {
                    console.log('responseeeeeeeeeee ' + JSON.stringify(response));
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.posts = [];
                });
        };

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


        $scope.deleteContent = function deleteContent() {
            if (JSON.stringify($scope.content) != '{}') {
                $uibModal.open({
                    templateUrl: 'modal.html',
                    controller: 'ModalDialogController',
                }).result.then(
                    function (success) {
                        // console.log("OK");
                        ContentService.deleteContent($scope.content.id).then(
                            function (response) {
                                getAllPosts();
                            }, function (error) {
                                console.log(error + " error  during service call")
                                $scope.contentTypes = [];
                            });
                    },
                    function (error) {
                        // console.log("cancel");
                    }
                );
            }
        };

        $scope.newContent = function newContent() {
            $scope.content = {};
        };


        $scope.$watch("currentPage", function () {
            console.log('current page and itemsperpage  ' + $scope.currentPage + ' ' + $scope.itemsPerPage);
            getAllPosts();
        });


        $scope.selectRow = function (content) {
            console.log(JSON.stringify(content) + " ---------------------");
            $scope.content = content;

        };


        $scope.onFileSelect = function (files) {
            console.log($scope.content.id);
            uploadService.uploadFileToUrl(files, $scope.content.id).then(
                function (response) {
                    console.log(response.data.imagePath);
                    $scope.content.imagePath = response.data.imagePath;
                }, function (error) {
                    console.log(error + " error  during service call")
                    // $scope.users = [];
                });
        };

    }
    ]);
