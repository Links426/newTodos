import { oneDay } from './constant'

export const getNowTime = (time: {
    getDay: () => number
    getFullYear: () => number
    getMonth: () => number
    getDate: () => number
}) => {
    const year = time.getFullYear()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const todayTimeStamp = Date.parse(
        new Date(year, month, date) as unknown as string
    )
    return { year, month, date, day, todayTimeStamp }
}
export const getCurrentMonth = (
    lastDay: number,
    timeArr: {
        date: number
        month: number
        year: number
        day: number
        timeStamp: number
    }[]
) => {
    for (let i = 0; i < 42; i++) {
        timeArr.push({
            date: new Date(lastDay + i * oneDay).getDate(),
            month: new Date(lastDay + i * oneDay).getMonth() + 1,
            year: new Date(lastDay + i * oneDay).getFullYear(),
            day: new Date(lastDay + i * oneDay).getDay(),
            timeStamp: lastDay + i * oneDay,
        })
    }
}
export const changeMonth = (year: number, month: number, array: any) => {
    // 获取这个月第一天距离周一的总数
    const distanceOfMon =
        ((new Date(year, month, 1).getDay() as any) - 1) * oneDay
    // 这个月第一天的时间戳
    const currentMonthFirstDay = Date.parse(new Date(year, month, 1) as any)
    // 日历表第一天的标准时间
    const CalendarFirstDay: number | Date = currentMonthFirstDay - distanceOfMon
    getCurrentMonth(CalendarFirstDay, array)
}
