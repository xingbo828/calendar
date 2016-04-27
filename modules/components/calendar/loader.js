define(
  // load dependencies
  [
    'modules/components/calendar/module',

    //Directives
    'modules/components/calendar/calendar',
    'modules/components/calendar/calendar-header-directive',
    'modules/components/calendar/calendar-body-directive',
    'modules/components/calendar/calendar-event-directive',
    //Services
    'modules/components/calendar/calendar-event-factory',
    //Controllers
    'modules/components/calendar/new-event-ctrl'
], function(calendarModule){
    'use strict';
    return calendarModule;
  });
