'use strict';
adsCmsFrontendApp.controller('FileUploadCtrl', [
    '$scope',
    '$http',
    '$filter',
    '$window',
    function ($scope, $http) {

        var url = "http://localhost:5000/api/sources/file";

        $scope.options = {
            url: url
        };

        $scope.loadingFiles = true;

        $http.get(url)
            .then(
            function (response) {
                $scope.loadingFiles = false;
                $scope.queue = response.data.files || [];
            },
            function () {
                $scope.loadingFiles = false;
            }
        );

    }
]);
