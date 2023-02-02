const prompt = require('prompt-sync')({sigint: true})

let input = Number(prompt('How many sides would you like your custom dice to have? '))

let customDice = Math.ceil(Math.random() * input)

console.log(customDice)