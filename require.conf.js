// configure require.js
require.config({
    waitSeconds: 2000,
    baseUrl: './',
    packages: [{
        name: 'modules/components/calendar',
        main: 'loader'
    }, {
        name: 'modules/demo',
        main: 'loader'
    }],
    // module paths
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-messages': 'bower_components/angular-messages/angular-messages',
        'ng-dialog': 'bower_components/ngDialog/js/ngDialog',

        'moment': 'bower_components/moment/min/moment-with-locales.min',
        'templates-main': 'templates',
        'lodash': 'bower_components/lodash/lodash.min',

    },

    // module dependencies
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-router': {
            deps: [
                'angular'
            ]
        },
        'angular-messages': {
            deps: [
                'angular'
            ]
        },
        'ng-dialog': {
            deps: [
                'angular'
            ]
        },
        'templates-main': {
            deps: [
                'angular'
            ]
        }
    }
});
