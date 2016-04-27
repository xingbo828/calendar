define(['modules/components/weather-card/module'], function(app) {
    'use strict';
    app.directive('weatherCard', weatherCard);
    weatherCard.$inject = ['$http'];

    function weatherCard($http) {
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'modules/components/weather-card/weather-card.html',
            link: function($scope, iElm, iAttrs) {
                $http({
                     method: 'GET',
                     url: 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=09cddcb480e4651797767451e13c776d&q=vancouver'
                 })
                 .then(function(result){
                     $scope.weatherData = result.data;
                 });
            }
        };
    }
});
