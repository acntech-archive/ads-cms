'use strict';
adsCmsFrontendApp.controller('MediaplayerCtrl', function ($scope, $location, mediaplayerService) {
  var todaysDate;

  var getPlayers = function() {
    //Get data
    mediaplayerService.readAll().then(function (receivedPlayerList) {
        $scope.playerList = receivedPlayerList;
    });
  }

  var addPlayer = function () {
    //Set todays date on the player object
    $scope.player.created = todaysDate;

    //..and send it off to the server
    mediaplayerService.create($scope.player)
      .then(
        function (success) {
          //Yay success! Make sure the user knows
          $scope.toggleAddMode();
          $scope.successMessage = "Creation succeeeded!";
          $scope.errorMessage = null;
          getPlayers();
        },
        function (error) {
          //The server gave us an error. Show the meat of the error message to the user
          $scope.errorMessage = error.data;
          $scope.successMessage = null;
        }
      );
  };

  var updatePlayer = function () {
    //Set todays date on the player object
    $scope.player.updated = todaysDate;

    mediaplayerService.update($scope.player)
      .then(
        function (success) {
          //Yay success! Make sure the user knows
          $scope.player = null;
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

  $scope.playerList = [];
  $scope.addMode = false;

  $scope.init = function () {
    getPlayers();
  }

  $scope.toggleAddMode = function () {
    $scope.player = null;
    $scope.addMode = !$scope.addMode;
  };

  $scope.toggleEditMode = function (player) {
    $scope.player = player;
    $scope.editMode = !$scope.editMode;
  };

  $scope.todaysDate = function() {
    return todaysDate = new Date();
  }

  $scope.savePlayer = function() {
    if ($scope.addMode) {
      addPlayer();
      return;
    }
    if ($scope.editMode) {
       updatePlayer();
       return;
    }
  }

  $scope.deletePlayer = function (player) {
        mediaplayerService.delete(player._id)
          .then(
            function (success) {
              //Yay success! Make sure the user knows
              $scope.player = null;
              $scope.successMessage = "Delete succeeeded!";
              $scope.errorMessage = null;
              getPlayers();
            },
            function (error) {
              //The server gave us an error. Show the meat of the error message to the user
              $scope.errorMessage = error.data;
            }
          );
    };

  $scope.refreshPlayers = function() {
    getPlayers();
  }
});
