'use strict';

angular.module('taskManagerApp').controller('UserController',
    ['$scope', 'UserService', 'uploadService', function ($scope, UserService, uploadService) {

        var self = this;
        $scope.rowIndex = -1;
        $scope.users = [];


        $scope.onFileSelect = function (files) {
            console.info('files', files);
            uploadService.uploadFileToUrl(files).then(
                function (response) {
                    console.log(JSON.stringify(response) + " cccccc")
                    // $scope.users = response.data;
                }, function (error) {
                    console.log(error + " error  during service call")
                    // $scope.users = [];
                });
        };



        $scope.selectRow = function (index) {
            if (index == $scope.rowIndex)
                $scope.rowIndex = -1;
            else {
                $scope.rowIndex = index;
                console.log($scope.rowIndex + "index");
            }

        };
        self.submit = submit;
        // self.getAllUsers = getAllUsers;
        self.createUser = createUser;
        self.updateUser = updateUser;
        self.removeUser = removeUser;
        self.editUser = editUser;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function getAllUsers() {
            UserService.loadAllUsers().then(
                function (response) {
                    console.log(JSON.stringify(response) + " cccccc")
                    $scope.users = response.data;
                }, function (error) {
                    console.log(error + " error  during service call")
                    $scope.users = [];
                });
        }

        getAllUsers();


        function submit() {
            console.log('Submitting');
            if (self.user.id === undefined || self.user.id === null) {
                console.log('Saving New User', self.user);
                createUser(self.user);
            } else {
                updateUser(self.user, self.user.id);
                console.log('User updated with id ', self.user.id);
            }
        }

        function createUser(user) {
            console.log('About to create user');
            UserService.createUser(user)
                .then(
                    function (response) {
                        console.log('User created successfully');
                        self.successMessage = 'User created successfully';
                        self.errorMessage = '';
                        self.done = true;
                        self.user = {};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating User');
                        self.errorMessage = 'Error while creating User: ' + errResponse.data.errorMessage;
                        self.successMessage = '';
                    }
                );
        }


        function updateUser(user, id) {
            console.log('About to update user');
            UserService.updateUser(user, id)
                .then(
                    function (response) {
                        console.log('User updated successfully');
                        self.successMessage = 'User updated successfully';
                        self.errorMessage = '';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while updating User');
                        self.errorMessage = 'Error while updating User ' + errResponse.data;
                        self.successMessage = '';
                    }
                );
        }


        function removeUser(id) {
            console.log('About to remove User with id ' + id);
            UserService.removeUser(id)
                .then(
                    function () {
                        console.log('User ' + id + ' removed successfully');
                    },
                    function (errResponse) {
                        console.error('Error while removing user ' + id + ', Error :' + errResponse.data);
                    }
                );
        }


        function editUser(id) {
            self.successMessage = '';
            self.errorMessage = '';
            UserService.getUser(id).then(
                function (user) {
                    self.user = user;
                },
                function (errResponse) {
                    console.error('Error while removing user ' + id + ', Error :' + errResponse.data);
                }
            );
        }

        function reset() {
            self.successMessage = '';
            self.errorMessage = '';
            self.user = {};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);
