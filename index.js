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
