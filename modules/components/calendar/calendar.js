define(['modules/components/calendar/module', 'moment'], function(app, moment) {
    'use strict';
    app.directive('calendar', calendar);
    calendar.$inject = [];

    function calendar() {
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            scope: {
                datePick: '&'
            },
            templateUrl: 'modules/components/calendar/calendar.html',
            link: function(scope, iElm, iAttrs) {
                scope.selectedDate = setToMidNight(moment());
                scope.month = scope.selectedDate.clone();

                var startDate = scope.selectedDate.clone();
                //first date of the month
                startDate.date(1);
                //last Sunday
                setToMidNight(startDate.day(0));

                buildMonth(scope, startDate);

                scope.pickDate = function(day) {
                    scope.datePick()(day);
                };

                scope.nextMonth = function() {
                    var next = scope.month.clone();
                    setToMidNight(next.month(next.month() + 1).date(1));
                    scope.month.month(scope.month.month() + 1);
                    buildMonth(scope, next);
                };

                scope.previousMonth = function() {
                    var previous = scope.month.clone();
                    setToMidNight(previous.month(previous.month() - 1).date(1));
                    scope.month.month(scope.month.month() - 1);
                    buildMonth(scope, previous);
                };

                function setToMidNight(date) {
                    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
                }

                function buildMonth(scope, startDate) {
                    scope.weeks = [];
                    var done = false,
                        date = startDate.clone(),
                        monthIndex = date.month(),
                        count = 0;
                    while (!done) {
                        scope.weeks.push({
                            days: buildWeek(date.clone())
                        });
                        date.add(1, "w");
                        done = count++ > 2 && monthIndex !== date.month();
                        monthIndex = date.month();
                    }
                }

                function buildWeek(date) {
                    var days = [];
                    for (var i = 0; i < 7; i++) {
                        days.push({
                            name: date.format("dddd"),
                            day: date.date(),
                            isToday: date.isSame(new Date(), "day"),
                            date: date.format("YYYY-MM-DD")
                        });
                        date = date.clone();
                        date.add(1, "d");
                    }
                    return days;
                }

            }
        };

    }
});
