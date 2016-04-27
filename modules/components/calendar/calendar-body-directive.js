define(['modules/components/calendar/module'], function(app) {
    'use strict';
    app.directive('calendarBody', calendarBody);
    calendarBody.$inject = [];

    function calendarBody() {
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'modules/components/calendar/calendar-body.html',
            link: function(scope, iElm, iAttrs) {


            }
        };

    }
});
