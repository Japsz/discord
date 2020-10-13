const puteadas = require('./puteadas')
module.exports = function (name) {
  const copy = puteadas
  // get random three from list
  return `${name} ${copy.sort(() => 1 - 2*Math.floor(Math.random()*2)).slice(0,6).join(' ')}`
}
