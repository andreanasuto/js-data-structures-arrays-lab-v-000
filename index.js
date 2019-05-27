// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.slice(2)
}

function destructivelyRemoveLastDriver() {
  return drivers.unshift
}

function destructivelyRemoveFirstDriver() {
   drivers.shift()
   return drivers
}

function appendDriver(name) {
  let new_array = [...drivers,name]
  return new_array
}

function prependDriver(name) {
  new_array = [name, ...drivers]
  return new_array
}

function removeLastDriver() {
  new_array = [...drivers]
  return new_array.unshift()
}

function removeFirstDriver() {
  drivers.shift()
  return drivers
}
