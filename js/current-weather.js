import weather from '../data/current-weather.js'
// weather.name //?

function setCurrentCity($el, city) {
  $el.textContent = city
}

function configCurrentWeather(weather) {

  // loader
  // date
  // city
  const $currentWeatherCity = document.querySelector('#current-weather-city')
  const city = weather.name
  setCurrentCity($currentWeatherCity, city)
  // temp
  // background

}

export default function currentWeather() {
  // GEO // API - weather // Config
  configCurrentWeather(weather)
  console.log(weather)
}