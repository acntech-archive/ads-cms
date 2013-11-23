'use strict';
adsCmsFrontendApp.controller('FileUploadCtrl', function ($scope, $upload) {
    $scope.fileList = [];
    $scope.addMode = false;

    $scope.toggleAddMode = function () {
        $scope.file = null;
        $scope.addMode = !$scope.addMode;
    };

    $scope.onFileSelect = function ($files) {
        $scope.selectedFiles = [];
        $scope.progress = [];
        if ($scope.upload && $scope.upload.length > 0) {
            for (var i = 0; i < $scope.upload.length; i++) {
                if ($scope.upload[i] != null) {
                    $scope.upload[i].abort();
                }
            }
        }
        $scope.upload = [];
        $scope.uploadResult = [];
        $scope.selectedFiles = $files;
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $scope.progress[i] = 0;
            (function (index) {
                $scope.upload[index] = $upload.upload({
                    url: 'upload',
                    headers: {'myHeaderKey': 'myHeaderVal'},
                    data: {
                        myModel: $scope.myModel
                    },
                    /* formDataAppender: function(fd, key, val) {
                     if (angular.isArray(val)) {
                     angular.forEach(val, function(v) {
                     fd.append(key, v);
                     });
                     } else {
                     fd.append(key, val);
                     }
                     }, */
                    file: $file,
                    fileFormDataName: 'myFile'
                }).then(function (response) {
                        $scope.uploadResult.push(response.data.result);
                    }, null, function (evt) {
                        $scope.progress[index] = parseInt(100.0 * evt.loaded / evt.total);
                    });
            })(i);
        }
    };

});
