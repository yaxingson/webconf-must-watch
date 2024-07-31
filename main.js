"use strict"

const version = function(major, minor, patch){
  const nodeVersions = process.versions['node'].split('.')

  major ??= nodeVersions[0]
  minor ??= nodeVersions[1]
  patch ??= nodeVersions[2]

  return `${major}.${minor}.${patch}`
}(1)

console.log(version)
console.log((function anonymous(){}).name)

function dir(obj) {
  // "use strict"
  return Reflect.ownKeys(Reflect.getPrototypeOf(obj))
}

function Component() {
  console.log(this)
  console.log(new.target)
  this.strictMode = true
}

console.log(new Component())
console.log(0 == new Number(0), Object.create(null))

// polyfill
if(!Object.create) {
  Object.create = function(o) {

  }
}

class Button {
  constructor() {
    this.displayName = 'button'
  }

  toString() {
    return `${this.displayName}`
  } 
}

class PrimaryButton extends Button {
  constructor() {
    super()
  }
}

console.log(new Button().toString())
console.log(Array.isArray([]))
