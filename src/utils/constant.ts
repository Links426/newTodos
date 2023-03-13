export const enum DAY_TYPE {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}
export const DAY_TYPE_LIST = [
    { index: DAY_TYPE.MONDAY, value: 'Mon' },
    { index: DAY_TYPE.TUESDAY, value: 'Tue' },
    { index: DAY_TYPE.WEDNESDAY, value: 'Wed' },
    { index: DAY_TYPE.THURSDAY, value: 'Thu' },
    { index: DAY_TYPE.FRIDAY, value: 'Fri' },
    { index: DAY_TYPE.SATURDAY, value: 'Sat' },
    { index: DAY_TYPE.SUNDAY, value: 'Sun' },
]
export const enum MONTH_TYPE {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
export const MONTH_TYPE_LIST = [
    { index: MONTH_TYPE.January, value: 'Jan' },
    { index: MONTH_TYPE.February, value: 'Feb' },
    { index: MONTH_TYPE.March, value: 'Mar' },
    { index: MONTH_TYPE.April, value: 'Ari' },
    { index: MONTH_TYPE.May, value: 'May' },
    { index: MONTH_TYPE.June, value: 'Jun' },
    { index: MONTH_TYPE.July, value: 'Jul' },
    { index: MONTH_TYPE.August, value: 'Aut' },
    { index: MONTH_TYPE.September, value: 'Sep' },
    { index: MONTH_TYPE.October, value: 'Oct' },
    { index: MONTH_TYPE.November, value: 'Nov' },
    { index: MONTH_TYPE.December, value: 'Dec' },
]

export const oneDay = 24 * 60 * 60 * 1000

export const enum GRADE_TYPE {
    NORMAL,
    MEDIUM,
    IMPORTANT,
}
export const GRADE_TYPE_LIST = [
    { index: GRADE_TYPE.NORMAL, value: 'Normal' },
    { index: GRADE_TYPE.MEDIUM, value: 'Medium' },
    { index: GRADE_TYPE.IMPORTANT, value: 'Important' },
]
