(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngAnimate',
  ]

angular.module('port', dependencies)
  .config(setupStates);

setupStates.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

function setupStates ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('layout', {
      template: '<layout-page><layout-page>',
      url: "/"
    })

}
}());
