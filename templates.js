angular.module('templates-main', ['modules/demo/calendar-overview.html']);

angular.module("modules/demo/calendar-overview.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/demo/calendar-overview.html",
    "<div>\n" +
    "    This is calendar overview\n" +
    "</div>\n" +
    "");
}]);
