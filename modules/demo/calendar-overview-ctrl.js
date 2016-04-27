define(
  // load dependencies
  [
    'modules/demo/module'
  ],
  function(app) {
    'use strict';

    app.controller('calendarOverviewController', calendarOverviewController);
    calendarOverviewController.$inject = ['$scope', '$state'];

    function calendarOverviewController($scope, $state){
        $scope.postDatePick = postDatePick;

        function postDatePick(day){
            $state.go('calendarEventDetail', {
                date: day.date
            });
        }
    }
});
