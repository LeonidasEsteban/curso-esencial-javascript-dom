/* Strings */

'Leonidas'

"Leonidas"
String(5) // ?
// `Leonidas`

const name = 'Leonidas'
const lastname = 'Esteban'

// const fullname = name + lastname //?
// const fullname = name + ' ' + lastname //?
const fullname = `${name} ${lastname}` // ?

fullname.length //?
fullname.charAt(3) //?
fullname.replace('Leonidas', 'Rivaldo') // ?
fullname.search('xxxxx') // ?
fullname.toUpperCase() // ?


/* Boleanos */
false
true

if (name) {
  console.log('La condición SI se cumplió')
} else {
  console.log('La condición NO se cumplió')
}

// Falsy Values
Boolean('') //?
Boolean("") //?
Boolean(``) //?
Boolean(0) //?
Boolean(-0) //?
Boolean(0n) //?
Boolean(NaN) //?
Boolean(null) //?
Boolean(undefined) //?

// Truthly Values
Boolean('leonidas') //?
Boolean(-1) //?
Boolean(1.1) //?
Boolean(1n) //?
Boolean(Infinity) //?
Boolean(-Infinity) //?
Boolean({}) //?
Boolean([]) //?
Boolean(new Date()) //?
