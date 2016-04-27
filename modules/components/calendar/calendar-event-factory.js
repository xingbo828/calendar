define(
    // load dependencies
    [
        'modules/components/calendar/module'
    ],
    function(app) {
        'use strict';
        app.factory('calendarEventFactory', calendarEventFactory);
        calendarEventFactory.$inject = ['$rootScope'];

        function calendarEventFactory($rootScope) {
            var events = {};
            return {
                saveEvent: _saveEvent,
                getEvents: _getEvents,
                deleteEvent: _deleteEvent,
                updateEvent: _updateEvent
            };

            function _saveEvent(date, event){
                if(angular.isUndefined(events[date])){
                    events[date] = [];
                }
                events[date].push(event);
                $rootScope.$broadcast('event-updated');
            }

            function _getEvents(date) {
                return angular.isDefined(events[date]) ? events[date]: [];
            }

            function _deleteEvent(date, eventId){
                events[date] = _.filter(events[date], function(e){
                    return e.id !== eventId;
                });
                $rootScope.$broadcast('event-updated');
            }

            function _updateEvent(date, event){
                angular.forEach(events[date], function(e){
                    if(e.id === event.id){
                        e = event;
                    }
                });
                $rootScope.$broadcast('event-updated');
            }


        }
    });
