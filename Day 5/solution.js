const fs = require("fs");
let input = fs.readFileSync('./input.txt', 'utf8').trim();

input = input.split('\r\n')
let seeds = input[0].split(' ').slice(1);

let maps = [];
let subArray = [];

for(let i=2; i<input.length; i++){
    if(input[i] === ''){
        maps.push(subArray);
        subArray = [];
    }  
    else{
        subArray.push(input[i]);
    }
}
if(subArray.length){
    maps.push(subArray)
}

for(let i=0; i<maps.length; i++){
    maps[i].shift();
    for(let j=0; j<maps[i].length; j++){
        maps[i][j] = maps[i][j].split(' ');
        for(let k=0; k<maps[i][j].length; k++){
            maps[i][j][k] = parseInt(maps[i][j][k]);
        }
    }
}

let m = Infinity;
for(let i=0; i<seeds.length; i++){
    m = Math.min(m,mappingToAll(seeds[i],maps))
    //console.log(mappingToAll(seeds[i],maps));
}
console.log(m);


function mappingToAll(n, maps){
    for(let i=0; i<maps.length; i++){
        n = mapTheNumber(n,maps[i])
    }
    return n
}

function mapTheNumber(num, map){
    //console.log(num,map);
    let n = parseInt(num);
    for(let i=0; i<map.length; i++){
        if(n >=map[i][1]  &&  n < (map[i][1]+(map[i][2]))){
            //console.log('map number : ',i+1);
            return (n + map[i][0] - map[i][1]);
        }
    };
    return n;
}
//console.log(maps);

