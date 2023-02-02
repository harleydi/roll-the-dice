const prompt = require('prompt-sync')({sigint: true})

let rolls = 1

// let dice = Math.ceil(Math.random() * 6)

let rigged = Number(prompt('Please give the number you would like to be rigged: '))




for (let i = 1; i < 7; i++) {
    if (i % 2 === 0) {
        // console.log(dice)
        console.log(Math.ceil(Math.random() * 6))
    } else {
        console.log(rigged)
    }
}

// console.log(dice)