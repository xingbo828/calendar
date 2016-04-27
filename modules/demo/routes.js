define(
    // load dependencies
    [
        'modules/demo/module',
    ],

    // define module
    function(app) {
        'use strict';
        app.config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('calendarOverview', {
                    url: '/calendar-overview',
                    templateUrl: 'modules/demo/calendar-overview.html',
                    controller:'calendarOverviewController'
                })
                .state('calendarEventDetail', {
                    url:'/calendar-date/:date',
                    templateUrl: 'modules/demo/calendar-event-detail.html',
                    controller: 'calendarEventDetailController'
                });
        }]);
    });
