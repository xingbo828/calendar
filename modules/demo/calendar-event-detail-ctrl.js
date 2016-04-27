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
        _loadEvents();
        $scope.seletedDate = $stateParams.date;
        $scope.$on('event-updated', _loadEvents);

        function _loadEvents(){
            $scope.events = calendarEventFactory.getEvents($stateParams.date);
        }
    }
});
