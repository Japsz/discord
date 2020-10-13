const payas = require('./payas')
module.exports = function () {
  const copy = payas
  copy.sort(() => 1 - 2*Math.floor(Math.random()*2))
  // get random three from list
  return copy[Math.floor(Math.random()*copy.length)]
}
