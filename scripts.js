const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || `ID ${futureId} not created yet`)

let copied = {
    id : 6,
    name: 'Xmas',
    date : new Date(`25 December ${currentYear}`)
}

isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
const newId = copied.id != holidays[6].id
console.log('ID change:', newId)
console.log('Name change:', copied.name)
console.log('Date change:', copied.date)

const firstHolidayTimestamp = Math.min (
    holidays[0].date.getDate,
    holidays[1].date.getDate,
    holidays[2].date.getDate,
    holidays[3].date.getDate,
    holidays[4].date.getDate,
    holidays[5].date.getDate,
    holidays[6].date.getDate,
    holidays[7].date.getDate,
    holidays[8].date.getDate,
)


const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

// NOT WORKING 
const firstDay = firstHolidayTimestamp.getDay
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays.date
console.log(randomHoliday Math.random)