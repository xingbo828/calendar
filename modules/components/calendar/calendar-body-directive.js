define(['modules/components/calendar/module'], function(app) {
    'use strict';
    app.directive('calendarBody', calendarBody);
    calendarBody.$inject = ['calendarEventFactory'];

    function calendarBody(calendarEventFactory) {
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'modules/components/calendar/calendar-body.html',
            link: function(scope, iElm, iAttrs) {
                scope.getNumOfEvents = function(day){
                    var events = calendarEventFactory.getEvents(day.date);
                    return events.length;
                };

            }
        };

    }
});
