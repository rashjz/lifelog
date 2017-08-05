angular.module('taskManagerApp').controller('taskManagerController', function ($scope,$http) {
    var urlBase = "";
    $scope.toggle = true;
    $scope.selection = [];
    $scope.tasks = [];
    $scope.statuses = ['ACTIVE', 'COMPLETED'];
    $scope.priorities = ['HIGH', 'LOW', 'MEDIUM'];
    $http.defaults.headers.post["Content-Type"] = "application/json";

    function findAllTasks() {
        //get all tasks and display initially
        $http.get(urlBase + 'tasks/search/findByTaskArchived?archivedfalse=0').then(
            function (successCallback) {
                // console.log(JSON.stringify(successCallback.data._embedded.tasks)+"cccccccccccccccccccccc")
            if (successCallback.data != undefined) {
                $scope.tasks = successCallback.data._embedded.tasks;
            }
                console.log($scope.tasks)
            for (var i = 0; i < $scope.tasks.length; i++) {

                if ($scope.tasks[i].taskStatus == 'COMPLETED') {
                    $scope.selection.push($scope.tasks[i].taskId);
                }
            }
            $scope.taskName = "";
            $scope.taskDesc = "";
            $scope.taskPriority = "";
            $scope.taskStatus = "";
            $scope.toggle = '!toggle';
        },
            function (errorResponse) {
                console.log('Error while loading users');
                self.message = errorResponse.statusText;
            });

    }

    findAllTasks();


    //add a new task
    $scope.addTask = function addTask() {
        if ($scope.taskName == "" || $scope.taskDesc == "" || $scope.taskPriority == "" || $scope.taskStatus == "") {
            alert("Insufficient Data! Please provide values for task name, description, priortiy and status");
        }
        else {
            var newtask = {
                taskName: $scope.taskName,
                taskDescription: $scope.taskDesc,
                taskPriority: $scope.taskPriority,
                taskStatus: $scope.taskStatus
            };


            $http.post(urlBase + '/tasks', newtask).then(
                function (data, status, headers) {
                alert("Task added");
                var newTaskUri = headers()["location"];
                console.log("Might be good to GET " + newTaskUri + " and append the task.");
                // Refetching EVERYTHING every time can get expensive over time
                // Better solution would be to $http.get(headers()["location"]) and add it to the list
                findAllTasks();
            }

            );
        }
    };
    // toggle selection for a given task by task id
    $scope.toggleSelection = function toggleSelection(taskUri) {
        var idx = $scope.selection.indexOf(taskUri);
        // is currently selected
        // HTTP PATCH to ACTIVE state
        if (idx > -1) {
            $http.patch(taskUri, {taskStatus: 'ACTIVE'}).then(function (data) {
                alert("Task unmarked");
                findAllTasks();
            });
            $scope.selection.splice(idx, 1);
        }
        // is newly selected
        // HTTP PATCH to COMPLETED state
        else {
            $http.patch(taskUri, {taskStatus: 'COMPLETED'}).then(function (data) {
                alert("Task marked completed");
                findAllTasks();
            });
            $scope.selection.push(taskUri);
        }
    };

    // Archive Completed Tasks
    $scope.archiveTasks = function archiveTasks() {
        $scope.selection.forEach(function (taskUri) {
            if (taskUri != undefined) {
                $http.patch(taskUri, {taskArchived: 1});
            }
        });
        alert("Successfully Archived");
        console.log("It's risky to run this without confirming all the patches are done. when.js is great for that");
        findAllTasks();
    };
});