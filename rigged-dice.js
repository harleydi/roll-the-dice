const prompt = require('prompt-sync')({sigint: true})

let rigged = prompt('Please give the number you would like to be rigged: ')

let dice = Math.ceil(Math.random() * 6)