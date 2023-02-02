const prompt = require('prompt-sync')({sigint: true})

let rolls = 1

let dice = Math.ceil(Math.random() * 6)

// let rigged = prompt('Please give the number you would like to be rigged: ')

let riggedCount = 0



if (rolls < 11) {
    console.log(dice)
    rolls++
}