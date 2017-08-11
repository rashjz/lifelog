'use strict';

angular.module('taskManagerApp').service('uploadService', function ($http, $q) {

    return ({
        uploadFileToUrl: uploadFileToUrl
    });

    function uploadFileToUrl(files,id) {
        var formData = new FormData();
        formData.append('file', files[0]);
        formData.append('id', id);
        console.log("uploadFileToUrl ==========  " + files[0].name)

        return $http({
            method: 'POST',
            url: '/api/upload/', // /api/upload
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            data: formData
        }).then(
            function handleSuccess(response) {
                console.log("handleSuccess  " + response);
                return (response);
            },
            function handleError(response) {
                console.log("handleError " + response);
                if (!angular.isObject(response.data) || !response.data.message) {
                    return ($q.reject("An unknown error occurred."));
                }

                return ($q.reject(response.data.message));
            });
    }
});


angular.module('taskManagerApp').directive('ngFileSelect', ['$parse', '$timeout', function ($parse, $timeout) {
    return function (scope, elem, attr) {
        var fn = $parse(attr['ngFileSelect']);
        elem.bind('change', function (evt) {
            var files = [], fileList, i;
            fileList = evt.target.files;
            if (fileList != null) {
                for (i = 0; i < fileList.length; i++) {
                    files.push(fileList.item(i));
                }
            }
            $timeout(function () {
                fn(scope, {
                    $files: files,
                    $event: evt
                });
            });
        });
    };
}]);


angular.module('taskManagerApp').directive('validfile', function validFile() {

    var validFormats = ['jpg', 'jpeg','png'];
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$validators.validFile = function() {
                elem.on('change', function () {
                    var value = elem.val(),
                        ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();

                    return validFormats.indexOf(ext) !== -1;
                });
            };
        }
    };
});
