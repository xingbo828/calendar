define(['modules/components/calendar/module', 'moment'], function(app, moment) {
    'use strict';
    app.directive('calendarEvent', calendarEvent);
    calendarEvent.$inject = ['calendarEventFactory', '$stateParams'];

    function calendarEvent(calendarEventFactory, $stateParams) {
        return {
            scope: {
                event: '='
            },
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'modules/components/calendar/calendar-event.html',
            link: function($scope, iElm, iAttrs) {
                $scope.enableEditMode = function(e){
                    e.preventDefault();
                    $scope.editMode = true;
                };
                $scope.saveEvent = function(){
                    calendarEventFactory.updateEvent($stateParams.date, $scope.event);
                    $scope.editMode = false;
                };

                $scope.deleteEvent = function(e){
                    e.preventDefault();
                    calendarEventFactory.deleteEvent($stateParams.date, $scope.event.id);
                };
            }
        };
    }
});
