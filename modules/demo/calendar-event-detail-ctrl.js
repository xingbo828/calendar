define(
  // load dependencies
  [
    'modules/demo/module'
  ],
  function(app) {
    'use strict';

    app.controller('calendarEventDetailController', calendarEventDetailController);
    calendarEventDetailController.$inject = ['$scope', '$stateParams', 'calendarEventFactory', 'ngDialog'];

    function calendarEventDetailController($scope, $stateParams, calendarEventFactory, ngDialog){
        $scope.events = calendarEventFactory.getEvents($stateParams.date);
        $scope.seletedDate = $stateParams.date;
    }
});
