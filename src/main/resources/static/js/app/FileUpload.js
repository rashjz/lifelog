'use strict';

angular.module('taskManagerApp').factory('FileUpload', function ($https) {

    var factory = {
        uploadFileToUrl: uploadFileToUrl
    };

    return factory;

    uploadFileToUrl = function (file, uploadUrl) {
        return

        var fd = new FormData();
        fd.append('file', file);


        $https.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(
            function (response) {
                return response;
            },
            function (errResponse) {
                console.error('Error while loading users');
            }
        );

    }
});