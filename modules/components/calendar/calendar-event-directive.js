define(['modules/components/calendar/module', 'moment'], function(app, moment) {
    'use strict';
    app.directive('calendarEvent', calendarEvent);
    calendarEvent.$inject = [];

    function calendarEvent() {
        return {
            scope: {
                event: '='
            },
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'modules/components/calendar/calendar-event.html',
            link: function($scope, iElm, iAttrs) {
            }
        };
    }
});
