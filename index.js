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

Array() // ?

const nameList = ['Leonidas', 'rivaldo', 'paula', 'carlos']
nameList[0] //?
nameList.length //?
nameList[nameList.length - 1] //?

// add propiedades
nameList['wtf'] = 'what the @$@#$@#'
nameList //?
nameList.length //?
nameList['wtf'] //?
nameList.wtf //?
nameList.wtf = 'sdfdsfdsfdsfds'
nameList.wtf //?

// const newList = nameList.concat('juanito') // ?

// nameList //?
// newList //?

const newList = [...nameList, 'maria']
newList //?

newList.push('ronaldo') // ?
newList //?
newList.pop() //?
newList //?

//muntidimension
nameList.push(['gonzalez', 'fernandez', 'pacheco', 'peluche'])

nameList //?

nameList[4][3] //?

const bidimensional = [[0, 1, 0], [1, 1, 0], [0, 1, 1]]
bidimensional[0][0] //?

const ceros = []
bidimensional.forEach((i, indexI) => {
  i.forEach((j, indexJ) => {
    if (j === 0) {
      ceros.push(`${indexI} ${indexJ}`)
    }
  })
})

ceros // ?

nameList.map(name => `el nombre es ${name}`) //?
nameList.filter(name => {
  if (name === 'paula') {
    return true
  }
  return false
}) // ?

nameList.find(name => {
  if (name === 'paula') {
    return true
  }
  return false
}) // ?

nameList.findIndex(name => {
  if (name === 'paula') {
    return true
  }
  return false
}) //?

// iterar objects

user //?

for (prop in user) {
  prop //?
  user[prop] //?
}

Object.keys(user).forEach(prop => {
  prop //?
  user[prop] //?
}) //?

// iterar arrays

for (value of nameList) {
  value //?
}

for (index in nameList) {
  index //?
  nameList[index] //?
}

for (let i = 0; i <= nameList.length - 1; i = i + 1) {
  i //?
  nameList[i] // ?
  if (i == 2) {
    break;
    // return
  }
}

let count = 0
while (count <= nameList.length - 1) {
  nameList[count] //?
  count = count + 1
}

const other = []
let count_ = 0
do {
  other[count_] // ?
  count_ = count_ + 1
} while (count_ <= other.length - 1)


// juanito escribe planas x 100 que digan: No debo olvidar mi cuaderno en casa

for (let i = 0; i <= 100; i = i + 1) {
  console.log('No debo olvidar mi cuaderno en casa')
}


// operadores == === != !== > < >= <= ! || &&

const myValue = 'value'

5 == 5 //?
5 == '' //?
5 == '5' //?
String(5) === '5' //?

5 != 4 //?
5 != 5 //?
5 != '5' //?
5 !== '5' //?

5 > 10 //?
10 > 5 //?

5 >= Number('5') //?
5 <= 5 //?

// ! && ||

!true //?
!false //?

name //?
user.age //?

if (name === 'Leonidas' && user.age === 30 && user.married === false) { //?
  console.log('funcionaaa')
}

name //?
if (name === 'Rivaldo') {
  console.log('es rivaldo')
} else if (name == 'Paula') {
  console.log('es paula')
} else if (name == 'Leonidas') {
  console.log('es leonidasssssss')
} else {
  console.log('no es nadie')
}


function isPrimeNumber(number) {
  for (let i = 2; i < number ; i = i +1) {
    if (number % i === 0) {
      return false
    } //?
  }
  return number > 1
}

isPrimeNumber(7) //?

let primeNumberCountUnder1000 = 0

for (let i = 0; i < 1000; i = i +1) {
  if (isPrimeNumber(i)) {
    primeNumberCountUnder1000 = primeNumberCountUnder1000 + 1
  }
}

primeNumberCountUnder1000//?

let page = 'home'
function x() {
  switch (page) {
    case 'home':
      return 'es la home'
      console.log('home')
      break
    case 'contact':
      console.log('pau')
      break
    default:
      console.log('home')
      break
  }
}

x(page) //?