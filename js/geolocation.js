
function geolocationSupport() {
  // if ('geolocation' in navigator) {
  //   return true
  // }
  // return false
  return 'geolocation' in navigator
}


export function getCurrentPosition() {
  if (!geolocationSupport()) throw new Error('No hay soporte de geolocalización en tu navegador')

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log(lat, lon)
  })
}