// importing the fs module in Node.js
const fs = require("fs");
const input = fs.readFileSync('./input.txt', 'utf8').trim();

const games = input.split('\n');
const gamesArray = [];
let ans = 0;

for (let game of games) {
    let words = game.split(/[;,:\r]/);
    gamesArray.push(stringto2d(words, ' '));
}

function stringto2d(stringArr, separator) {
    return stringArr.map((string) => string.split(separator));
}

for (let i = 0; i < gamesArray.length; i++) {
    let red = 0;
    let blue = 0;
    let green = 0;
    let flag = false;

    for (let j = 0; j < gamesArray[i].length; j++) {
        const color = gamesArray[i][j][2];
        const count = Number(gamesArray[i][j][1]);

        if (color === 'red' && count > 12) {
            flag = true
        } else if (color === 'blue' && count > 14) {
            flag = true
        } else if (color === 'green' && count > 13) {
            flag = true
        }
    }

    console.log("myMap for game ", gamesArray[i][0][1]);
    console.log({red,blue,green})

    if(!flag){
        ans += Number(gamesArray[i][0][1]);
    }
}

console.log(ans);
