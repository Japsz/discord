const axios = require('axios')

const catfacts = axios.create({
  baseURL: 'https://cat-fact.herokuapp.com/'
})

module.exports = catfacts
