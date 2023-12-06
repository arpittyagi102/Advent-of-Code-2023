const fs = require("fs");
let input = fs.readFileSync('./input.txt', 'utf8').trim();

let smallArr = [];
let bigArr = [];
let ansArr = [];
let ans = 0;
let flag = false;

input = input.split('\n');
for(let i=0; i<input.length; i++){
    input[i]=input[i].split('');
}

for(let i=0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
        if(/\d/.test(input[i][j])){
            smallArr.push([i,j]);
            flag = true;
        }
        else{
            if(flag && smallArr.length>0){
                bigArr.push(smallArr);
                smallArr = []         
            }
            glag = false;
        }
    }
}

for(let i=0; i<bigArr.length; i++){
    let isAd = true;
    
    //console.log(bigArr[i])
    for(let one of bigArr[i]){
        //console.log(input[one[0]][one[1]] + "")
    }
    for(let j=0; j<bigArr[i].length; j++){
        if(!check(bigArr[i][j][0],bigArr[i][j][1])){
            isAd = false;
        }
    }
    
    if(!isAd){
        ansArr.push(bigArr[i]);
    }
}

for(let i=0; i<ansArr.length; i++){
    let n1 = 0;
    for(let j=0; j<ansArr[i].length; j++){
        n1 = n1*10 + Number(input[ansArr[i][j][0]][ansArr[i][j][1]])
    }
    ans += n1;
}
console.log(ans)

function check(i,j){
    //console.log("Number is ",input[i][j]);
    if(i!=0 && /[^a-zA-Z0-9\r\n.]/.test(input[i-1][j])){
        return false;
    }
    else if(i!=input.length-1 && /[^a-zA-Z0-9\r\n.]/.test(input[i+1][j])){
        return false;
    }
    else if(j!=0 && /[^a-zA-Z0-9\r\n.]/.test(input[i][j-1])){
        return false;
    }
    else if(j!=139 && /[^a-zA-Z0-9\r\n.]/.test(input[i][j+1])){
        return false;
    }
    else if(i!=0 && j!=0 && /[^a-zA-Z0-9\r\n.]/.test(input[i-1][j-1])){
        return false;
    }
    else if(i!=0 && j!=139 && /[^a-zA-Z0-9\r\n.]/.test(input[i-1][j+1])){
        return false;
    }
    else if(i!=input.length-1 && j!=139 && /[^a-zA-Z0-9\r\n.]/.test(input[i+1][j+1])){
        return false;
    }
    else if(i!=input.length-1 && j!=0 && /[^a-zA-Z0-9\r\n.]/.test(input[i+1][j-1])){
        return false;
    }
    else{
        return true;
    }
}

//console.log(input);