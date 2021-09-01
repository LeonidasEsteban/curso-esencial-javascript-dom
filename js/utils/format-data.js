
const defaultDateOptions = {
  day: 'numeric',
  weekday: 'long',
  month: 'long',
}

export function formatDate(date, options = defaultDateOptions) {
  return new Intl.DateTimeFormat('es', options).format(date)
}

