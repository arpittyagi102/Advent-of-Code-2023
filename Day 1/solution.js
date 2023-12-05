// importing the fs module in node js
const fs = require("fs");
const input = fs.readFileSync('./input.txt', 'utf8').trim()
function partOne(input) {
    const lines = input.split('\n')
    let sum = 0;
    lines.map((line) => {
        const regex = /\d/g
        const digits = line.match(regex)
        const first = digits[0]
        const last = digits[digits.length - 1]
        const number = Number(first + last)
        console.log(number)
        sum = sum + number
    })
    return sum
}

console.log(partOne(input));