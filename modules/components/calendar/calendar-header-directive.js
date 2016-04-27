define(['modules/components/calendar/module', 'moment'], function(app, moment) {
    'use strict';
    app.directive('calendarHeader', calendarHeader);
    calendarHeader.$inject = ['ngDialog'];

    function calendarHeader(ngDialog) {
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'modules/components/calendar/calendar-header.html',
            link: function($scope, iElm, iAttrs) {

                $scope.mode = iAttrs.view;
                if ($scope.mode === 'detail') {
                    var clone = $scope.seletedDate;
                    $scope.selectedDate = moment(clone);

                    $scope.addEvent = function() {
                        var scope = $scope.$new();
                        scope.date = clone;
                        var dialogConfig = {
                            template: 'modules/components/calendar/add-new-event-dialog.html',
                            controller: 'newEventController',
                            closeByDocument: false,
                            scope: scope
                        };
                        ngDialog.open(dialogConfig);
                    };
                }


            }
        };
    }
});
