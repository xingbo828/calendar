define(
  // load dependencies
  [
    'modules/components/weather-card/module',

    //Directives
    'modules/components/weather-card/weather-card-directive',

], function(weatherCardModule){
    'use strict';
    return weatherCardModule;
  });
