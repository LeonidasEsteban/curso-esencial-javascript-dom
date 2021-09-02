
function geolocationSupport() {
  // if ('geolocation' in navigator) {
  //   return true
  // }
  // return false
  return 'geolocation' in navigator
}

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 1000000,
}


export function getCurrentPosition(options = defaultOptions) {
  if (!geolocationSupport()) throw new Error('No hay soporte de geolocalización en tu navegador')

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      resolve(position)
      // console.log(lat, lon)
      // console.log('esto ES  getCurrentPosition')
    }, () => {
      reject('no hemos podido obtener tu ubicación')
    }, options)
  })
}

export async function getLatLon(options = defaultOptions) {
  try {
    const { coords: { latitude: lat, longitude: lon } } = await getCurrentPosition(options)
    return { lat, lon, isError: false }
  } catch {
    return { isError: true, lat: null, lon: null }
  }
}