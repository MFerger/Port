(function() {
  'use strict';
  angular.module('port')
    .directive('layoutPage', layoutDirective);

  function layoutDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/javascripts/layout/layout.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }
controller.$inject = [

]

  function controller () {
    var vm = this;
    console.log('yay it was called');
  }

}());
