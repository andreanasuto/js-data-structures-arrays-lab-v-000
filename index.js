// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
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
  let new_array = [name, ...drivers]
  return new_array
}

function removeLastDriver() {
  let new_array = [...drivers]
  new_array.pop()
  return new_array
}

function removeFirstDriver() {
  let new_array = [...drivers]
  new_array.shift()
  return new_array
}
