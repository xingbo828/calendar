angular.module('templates-main', ['modules/components/calendar/add-new-event-dialog.html', 'modules/components/calendar/calendar-body.html', 'modules/components/calendar/calendar-event.html', 'modules/components/calendar/calendar-header.html', 'modules/components/calendar/calendar.html', 'modules/demo/calendar-event-detail.html', 'modules/demo/calendar-overview.html']);

angular.module("modules/components/calendar/add-new-event-dialog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/components/calendar/add-new-event-dialog.html",
    "<!-- Modal -->\n" +
    "<div class=\"modal\">\n" +
    "    <!-- Modal: Header -->\n" +
    "    <div class=\"modal__header\">\n" +
    "        <h3>New Event</h3>\n" +
    "    </div>\n" +
    "    <!-- / Modal: Header -->\n" +
    "    <!-- Modal: Content -->\n" +
    "    <form name=\"newEvent\" novalidate ng-submit=\"confirm()\">\n" +
    "        <div class=\"modal__content\">\n" +
    "            <label for=\"eventTitle\">Event title</label>\n" +
    "            <input\n" +
    "                autofocus\n" +
    "                type=\"text\"\n" +
    "                name=\"eventTitle\"\n" +
    "                ng-model=\"newEvent.title\"\n" +
    "                required\n" +
    "            >\n" +
    "\n" +
    "        </div>\n" +
    "        <!-- / End Modal: Content -->\n" +
    "        <!-- Modal: Footer -->\n" +
    "        <div class=\"modal__footer\">\n" +
    "            <button type=\"submit\" class=\"c-button c--blue c--full-width\">Create</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <!-- / End Modal: Footer -->\n" +
    "</div>\n" +
    "<!-- / End Modal -->\n" +
    "");
}]);

angular.module("modules/components/calendar/calendar-body.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/components/calendar/calendar-body.html",
    "<div class=\"c-calendar-body\">\n" +
    "    <ul class=\"c-calendar-body__heading\">\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Sunday</li>\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Monday</li>\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Tuesday</li>\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Wednesday</li>\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Thursday</li>\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Friday</li>\n" +
    "        <li class=\"c-calendar-body__heading-cell\">Saturday</li>\n" +
    "    </ul>\n" +
    "    <ul class=\"c-calendar-body__body\">\n" +
    "        <li class=\"c-calendar-body__body-row-container\" ng-repeat=\"week in weeks\">\n" +
    "            <ul class=\"c-calendar-body__body-row\">\n" +
    "                <li class=\"c-calendar-body__body-cell\"\n" +
    "                    ng-class=\"{\n" +
    "                        'c--disabled': day.name==='Sunday' || day.name==='Saturday',\n" +
    "                        'c--today': day.isToday\n" +
    "                    }\"\n" +
    "                    ng-click=\"pickDate(day)\"\n" +
    "                    ng-repeat=\"day in week.days\">\n" +
    "                    <span class=\"c-calendar-body__body-cell-date\">{{day.day}}</span>\n" +
    "                    <span class=\"c-calendar-body__body-cell-event-counter\" ng-if=\"getNumOfEvents() > 0\">\n" +
    "                        {{getNumOfEvents()}}\n" +
    "                    </span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/components/calendar/calendar-event.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/components/calendar/calendar-event.html",
    "<div class=\"c-calendar-event\">\n" +
    "    <pre>{{event | json}}</pre>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/components/calendar/calendar-header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/components/calendar/calendar-header.html",
    "<div class=\"c-calendar-header\">\n" +
    "    <div class=\"c-calendar-header__month-switcher\" ng-if=\"mode==='overview'\">\n" +
    "        <button type=\"button\" ng-click=\"previousMonth()\" class=\"c-calendar-header__month-switcher-action c--previous\"></button>\n" +
    "        <button type=\"button\" ng-click=\"nextMonth()\" class=\"c-calendar-header__month-switcher-action c--next\"></button>\n" +
    "    </div>\n" +
    "    <div class=\"c-calendar-header__date\">{{selectedDate.format('MMMM DD, YYYY')}}</div>\n" +
    "    <button ng-if=\"mode==='detail'\" type=\"button\" ng-click=\"addEvent()\" class=\"c-calendar-header__new-event-action\"></button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/components/calendar/calendar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/components/calendar/calendar.html",
    "<div>\n" +
    "    <calendar-header view=\"overview\"></calendar-header>\n" +
    "    <calendar-body></calendar-body>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/demo/calendar-event-detail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/demo/calendar-event-detail.html",
    "<div>\n" +
    "    <calendar-header view=\"detail\"></calendar-header>\n" +
    "    <div>\n" +
    "        <calendar-event event=\"event\" ng-repeat=\"event in events\"></calendar-event>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/demo/calendar-overview.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/demo/calendar-overview.html",
    "<calendar date-pick=\"postDatePick\"></calendar>\n" +
    "");
}]);
