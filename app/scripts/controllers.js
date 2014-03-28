'use strict';

angular.module('WtmMobile.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function ($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function ($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})

.controller('TwitterCtrl', function($scope) {
  $scope.twitter = {};
  $scope.sendTwitter = function() {
    var socket = io.connect("http://wtm-lima.herokuapp.com:80/");
    if($scope.twitter)
      socket.emit('new-twitter-profile', $scope.twitter);
  }
});
