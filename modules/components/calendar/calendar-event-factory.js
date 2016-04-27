define(
    // load dependencies
    [
        'modules/components/calendar/module'
    ],
    function(app) {
        'use strict';
        app.factory('calendarEventFactory', calendarEventFactory);
        calendarEventFactory.$inject = [];

        function calendarEventFactory() {
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
            }

            function _getEvents(date) {
                return angular.isDefined(events[date]) ? events[date]: [];
            }

            function _deleteEvent(date, eventId){

            }

            function _updateEvent(date, event){

            }


        }
    });
