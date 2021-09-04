
const defaultDateOptions = {
  day: 'numeric',
  weekday: 'long',
  month: 'long',
}

export function formatDate(date, options = defaultDateOptions) {
  return new Intl.DateTimeFormat('es', options).format(date)
}

export function formatTemp(value) {
  return `${Math.floor(value)}°`
}

export function formatWeekList(rawData) {
  // const weeklist = [[], [], [], [], []]
  let dayList = []
  const weeklist = []
  rawData.forEach((item, index) => {
    dayList.push(item)
    if ((index + 1) % 8 === 0) {
      weeklist.push(dayList)
      dayList = []
    }
  })
  return weeklist
}

