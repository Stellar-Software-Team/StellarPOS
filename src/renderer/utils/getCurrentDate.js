// import getBaseURL from "./paths";

// async function loadTranslations(language) {
//   console.log(language)
//   const response = await fetch(`${__dirname}/../translations/${language}.json`);
//   const translations = await response.json();
//   return translations;
// }

export function getLastSevenDays(currentDay) {
  let array = Array.from({ length: 7 }, (_, i) => currentDay - i)
  return array.reverse()
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export async function getCurrentDate(language) {
  // This should check if the user has internet connection before using the localTime
  let date = new Date()
  // const translations = await loadTranslations(language)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const monthName = months[date.getMonth() + 1] //translations.month[date.getMonth()+ 1]
  return [date.getDate(), monthName, date.getFullYear()]
}

export default async function getRemainingDays() {
  const [day, month, year] = getCurrentDate()
  let lastDay

  switch (month) {
    case 2:
      lastDay = isLeapYear(year) ? 29 : 28
      break
    case 4:
    case 6:
    case 9:
    case 11:
      lastDay = 30
      break
    default:
      lastDay = 31
  }
  const remainingDays = lastDay - day
  return remainingDays
}

// export default getRemainingDays;
