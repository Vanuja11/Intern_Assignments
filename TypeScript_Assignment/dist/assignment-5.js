"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
function getDayName(day) {
    switch (day) {
        case DaysOfWeek.Sunday:
            return 'Sunday';
        case DaysOfWeek.Monday:
            return 'Monday';
        case DaysOfWeek.Tuesday:
            return 'Tuesday';
        case DaysOfWeek.Wednesday:
            return 'Wednesday';
        case DaysOfWeek.Thursday:
            return 'Thursday';
        case DaysOfWeek.Friday:
            return 'Friday';
        case DaysOfWeek.Saturday:
            return 'Saturday';
        default:
            return 'Unknown';
    }
}
const today = DaysOfWeek.Friday;
console.log(getDayName(today));
