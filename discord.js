const Discord = require('discord.js')
const client = new Discord.Client()
const catFacts = require('./apis/catFacts')
const puteador = require('./comandos/putea')
const payar = require('./comandos/paya')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  const culiaos = (/[a-zA-Z0-9]+ culiao/g).exec(msg.content)
  const puteado = (/!putea [a-zA-Z0-9]+$/g).exec(msg.content)
  if (msg.content === '!pingas') {
    msg.reply('PINGAS')
  } else if (msg.content === '!paya') {
    msg.channel.send(payar())
  } else if (puteado){
    const nombre = puteado[0].slice(7)
    msg.channel.send(puteador(nombre))
  } else if (msg.content === '!catfact') {
    catFacts.get('/facts/random').then((response) => { msg.channel.send(response.data.text) })
  } else if (culiaos) {
    culiaos.forEach(item => { msg.channel.send(`${item.replace('culiao', '')}reculiao`) })
  }
})

client.login('NzU0MjA5MzYxNDA4MTYzODQx.X1xaNA.gQPOme8uGJunS7fvO4aFWCJeSE0')
