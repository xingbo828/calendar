require([
    'lodash',
    'moment',
    'angular',
    'angular-router',
    'angular-messages',
    'ng-dialog',
    'templates-main',
    'modules/demo',
    'modules/components/calendar'
], function(_, moment) {

    'use strict';
    var app = angular.module('IQmetrix', [
        //Vendor modules
        'ngMessages',
        'ui.router',

        'ngDialog',

        //Custome modules
        'DEMO',
        'COMPONENTS.CALENDAR'
    ]);

    app.config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/calendar-overview');
    }]);

    angular.bootstrap(window.document.documentElement, [app.name], {
        strictDi: true
    });


});
