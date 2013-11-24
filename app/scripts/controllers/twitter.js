'use strict';
adsCmsFrontendApp.controller('TwitterCtrl', function ($scope, $location, twitterService) {
    var getConfig = function () {
        //Get data
        twitterService.readData().then(function (receivedConfigs) {
            $scope.twitterConfig = receivedConfigs;
        });
    };

    $scope.updateConfig = function (twitterConfig) {
        twitterConfig.$save()
            .then(
            function (success) {
                //Yay success! Make sure the user knows
                $scope.toggleEditMode();
                $scope.successMessage = "Update succeeeded!";
                $scope.errorMessage = null;
            },
            function (error) {
                //The server gave us an error. Show the meat of the error message to the user
                $scope.errorMessage = error.data;
            }
        );
    };

    $scope.editMode = false;

    getConfig();

    $scope.toggleEditMode = function () {
        $scope.editMode = !$scope.editMode;
    };
});
