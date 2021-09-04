import { getWeeklyWeather } from './services/weather.js'
import { getLatLon } from './geolocation.js'

function configWeeklyWeather() {

}

export default async function weeklyWeather() {
  const { lat, lon, isError } = await getLatLon()
  if (isError) return console.log('A ocurrido un error ubicandote')
  const { isError: weeklyWeatherError, data: weather } = await getWeeklyWeather(lat, lon)
  if (weeklyWeatherError) return console.log('oh! a ocurrido un error trayendo el pronóstico del clima')
  configWeeklyWeather(weather)
}