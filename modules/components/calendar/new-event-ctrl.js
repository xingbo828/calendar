define(
  // load dependencies
  [
    'modules/components/calendar/module'
  ],
  function(app) {
    'use strict';

    app.controller('newEventController', newEventController);
    newEventController.$inject = ['$scope'];

    function newEventController($scope){
        
    }
});
