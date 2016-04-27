angular.module('templates-main', ['modules/components/calendar/add-new-event-dialog.html', 'modules/components/calendar/calendar-body.html', 'modules/components/calendar/calendar-event.html', 'modules/components/calendar/calendar-header.html', 'modules/components/calendar/calendar.html', 'modules/components/weather-card/weather-card.html', 'modules/demo/calendar-event-detail.html', 'modules/demo/calendar-overview.html']);

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
    "            <label for=\"eventTitle\">Event title *</label>\n" +
    "            <input\n" +
    "                autofocus\n" +
    "                type=\"text\"\n" +
    "                name=\"eventTitle\"\n" +
    "                ng-model=\"event.title\"\n" +
    "                ng-class=\"{ 'has-error': newEvent.eventTitle.$touched && newEvent.eventTitle.$invalid }\"\n" +
    "                required\n" +
    "            >\n" +
    "            <div ng-show=\"newEvent.eventTitle.$touched && newEvent.eventTitle.$invalid\" ng-messages=\"newEvent.eventTitle.$error\" role=\"alert\" class=\"field-validation\">\n" +
    "                <p ng-message=\"required\">Event title is required</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <label for=\"eventType\">Event type *</label>\n" +
    "            <p class=\"c--no-margin\"><input type=\"radio\" ng-model=\"event.type\" value=\"Meeting\"> Meeting</p>\n" +
    "            <p class=\"c--no-margin\"><input type=\"radio\" ng-model=\"event.type\" value=\"Appointment\"> Appointment</p>\n" +
    "            <p class=\"c--no-margin\"><input type=\"radio\" ng-model=\"event.type\" value=\"Task\"> Task</p>\n" +
    "\n" +
    "            <label for=\"eventType\">Note</label>\n" +
    "            <textarea ng-model=\"event.note\"></textarea>\n" +
    "\n" +
    "            <div ng-if=\"event.type !== 'Task'\">\n" +
    "                <label for=\"eventType\">Time</label>\n" +
    "                <div class=\"c--no-margin\">\n" +
    "                    <input type=\"time\" ng-model=\"event.from\"> to <input type=\"time\" ng-model=\"event.to\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- / End Modal: Content -->\n" +
    "        <!-- Modal: Footer -->\n" +
    "        <div class=\"modal__footer\">\n" +
    "            <button type=\"submit\"\n" +
    "            ng-class=\"{'c--is-disabled': newEvent.$invalid}\"\n" +
    "            class=\"c-button c--blue c--full-width\">Create</button>\n" +
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
    "                    <span class=\"c-calendar-body__body-cell-event-counter\" ng-if=\"getNumOfEvents(day) > 0\">\n" +
    "                        {{getNumOfEvents(day)}}\n" +
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
    "<div\n" +
    "    class=\"c-calendar-event\"\n" +
    "    ng-class=\"{\n" +
    "        'c--meeting': event.type==='Meeting',\n" +
    "        'c--appointment': event.type==='Appointment',\n" +
    "        'c--task': event.type==='Task'\n" +
    "    }\"\n" +
    ">\n" +
    "    <div ng-show=\"!editMode\">\n" +
    "        <div class=\"c-calendar-event__action-group\">\n" +
    "            <a ng-click=\"enableEditMode($event)\" class=\"c-calendar-event__action c--edit\" href=\"#\"></a>\n" +
    "            <a ng-click=\"deleteEvent($event)\" class=\"c-calendar-event__action c--delete\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"c-calendar-event__title\">\n" +
    "            {{event.title}}\n" +
    "        </div>\n" +
    "        <div ng-if=\"event.type!== 'Task'\">\n" +
    "            {{event.from | date: \"HH:mm:ss\"}} - {{event.to | date: \"HH:mm:ss\"}}\n" +
    "        </div>\n" +
    "        <div class=\"c-calendar-event__note\">\n" +
    "            {{event.note}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"editMode\" >\n" +
    "        <label>Event title</label>\n" +
    "        <input type=\"text\" ng-model=\"event.title\">\n" +
    "        <button type=\"button\" class=\"c-button c--blue\" ng-click=\"saveEvent()\">Save</button>\n" +
    "    </div>\n" +
    "\n" +
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

angular.module("modules/components/weather-card/weather-card.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/components/weather-card/weather-card.html",
    "<div class=\"c-weather-card\">\n" +
    "    <div class=\"c-weather-card__city\">{{weatherData.name}}</div>\n" +
    "    <img ng-src=\"http://openweathermap.org/img/w/{{weatherData.weather[0].icon}}.png\">\n" +
    "    <div class=\"c-weather-card__conditation\">{{weatherData.weather[0].description}}</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/demo/calendar-event-detail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/demo/calendar-event-detail.html",
    "<div class=\"t-event-detail\">\n" +
    "    <calendar-header view=\"detail\"></calendar-header>\n" +
    "    <div class=\"c-event-deail-container\">\n" +
    "        <div class=\"c-events\">\n" +
    "            <calendar-event event=\"event\" ng-repeat=\"event in events\"></calendar-event>\n" +
    "        </div>\n" +
    "        <div class=\"c-weather-card\">\n" +
    "            <weather-card></weather-card>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/demo/calendar-overview.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/demo/calendar-overview.html",
    "<calendar date-pick=\"postDatePick\"></calendar>\n" +
    "");
}]);
