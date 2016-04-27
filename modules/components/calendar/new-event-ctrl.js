define(
  // load dependencies
  [
    'modules/components/calendar/module'
  ],
  function(app) {
    'use strict';

    app.controller('newEventController', newEventController);
    newEventController.$inject = ['$scope', 'calendarEventFactory'];

    function newEventController($scope, calendarEventFactory){
        $scope.event = {
            title: '',
            type: 'Meeting',
            from: null,
            to: null
        };

        $scope.confirm = function(){
            if(!$scope.newEvent.$invalid){
                $scope.event.id = _.uniqueId();
                calendarEventFactory.saveEvent($scope.date, $scope.event);
                $scope.closeThisDialog();
            }
        };
    }
});
