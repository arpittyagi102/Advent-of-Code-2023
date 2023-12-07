const fs = require("fs");
let input = fs.readFileSync('./example.txt', 'utf8').trim();

input = input.split('\r\n');
let ansArr = [];
let ans = 0;

for(let i=0; i<input.length; i++){
    input[i] = input[i].split(/[:|]/);
    input[i][1] = input[i][1].trim().split(' ');
    input[i][2] = input[i][2].trim().split(' ');
}

//console.log(input);

for(let i=0; i<input.length; i++){
    let count = 0;
    for(let j=0; j<input[i][1].length; j++){        
        if(input[i][2].find((x) => x===input[i][1][j])){
            count++;
        }
    }
    let one = Math.floor(Math.pow(2,count-1));
    console.log(one);
    ans += one;
}

console.log("total = ",ans);