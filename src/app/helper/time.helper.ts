import moment from 'moment'
import 'moment/locale/id' // without this line it didn't work
moment.locale('id')

export function dateFormat(time: any, format: string = 'DD-MMM-YYYY') {
  const result = moment(time).format(format) || ''
  return result != 'Invalid date' ? result : '-'
}

export function timeFormat(time: any, format: string = 'DD MMM YYYY, HH:mm') {
  const result = moment(time).format(format) || ''
  return result != 'Invalid date' ? result : '-'
}

export function timeFormatAlt(time: any) {
  const result = moment(time).format('MMM YYYY, DD HH:mm') || ''
  return result != 'Invalid date' ? result : '-'
}

export function timeFormatAgo(time: any) {
  return time ? moment(time).fromNow() : ''
}

export function currentDate() {
  return moment().format('dddd, DD MMMM YYYY')
}

export function decimalHourToTime(num: any) {
  const hour = ('0' + (Math.floor(num) % 24)).slice(-2)
  const minute: any = ((num % 1) * 60 + '0').slice(0, 2)
  return hour + ':' + (minute.includes('.') ? '0' : '') + minute?.replace(/\./g, '')
}

export const calculateAge = (dateBirth: any) => {
  const yearsOld = dateBirth ? moment().diff(dateBirth, 'years', false) : null
  return yearsOld
}

export const yearOptions = (minYear: number) => {
  let now = moment().year()
  let result = []
  for (let index = minYear; index <= now; index++) result.push({ value: index, label: index })

  return result.reverse()
}
