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

/* Numbers */
5
0.5
.5 //?
5.0 // ?
Number('5') //?
typeof(Number('5')) //?
typeof('5') //?
typeof(String(5)) //?

// arimética básica
10 + 5 //?
10 - 5 //?
5 * 5 //?
10 / 2 //?
5 % 2 //?
Math.pow(5, 2) //?
Math.sqrt(9) //?

// métodos

const sum = 5 + 7 //?

typeof sum.toFixed(2) //?
typeof(sum) //?

typeof sum.toString() //?


5 + '5' //?
typeof(5 + '5') //?
'6' + 5 //?
typeof('' + 10) //?

Number(sum) + 5 //?

10 - '5' //?
5 * '5' //?
15 / '3' //?
'5' * 3 //?

typeof(10 - '') //?
Number('') //?
10 * '' //?
10 / '' //?

10 + 'leonidas' //?
10 - 'leonidas' //?

const nan = 10 - 'leonidas' //?

if (nan === NaN) {
  console.log('si sin iguales')
} else {
  console.log('no son iguales')
}

typeof(nan) //?

const user = {
  name: 'Leonidas',
  lastname: 'Esteban',
}

user.name // ?

user['name'] //?

const find = 'lastname'

user[find] //?


user.age = 30
user // ?

user.married = false
user // ?

user.course = {
  name: 'javascript',
  classes: 50,
}

user.list = ['1', 2, null]

{
  // const name = user.name // ?
  const { name } = user
  name // ?
  const { course } = user
  course // ?
}

user.fullname = function() { return `${user.name} ${user.lastname}` }
user.fullname() //?
user.fullname = function() { return `${this.name} ${this.lastname}` }
user.fullname() //?


function suma(a, b) {
  return a + b
}

suma(5, 5) //?

const resta = function (a, b) {
  return a - b
}

resta(17, 5) //?

const multi = (a, b) => {
  return a * b
}

multi(5, 7) // ?

user.fullname.bind({name: 'funalo'})() //?

user.fullname = () => { return `${this.name} ${this.lastname}` }

// user.fullname.bind({name: 'funalo'})() //?

['a', 'b', 'c'].map(() => {return 'leonidas'}) // ?
