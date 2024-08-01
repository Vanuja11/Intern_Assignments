enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayName(day: DaysOfWeek): string {
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

const today: DaysOfWeek = DaysOfWeek.Friday
console.log(getDayName(today))