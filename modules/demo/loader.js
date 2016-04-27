define(
  // load dependencies
  [
    'modules/demo/module',
    'modules/demo/routes',
    //Controllers
    'modules/demo/calendar-overview-ctrl',
    'modules/demo/calendar-event-detail-ctrl'
], function(demoModule){
    'use strict';
    return demoModule;
  });
