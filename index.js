let graph = [];
let paths = [];
let ants = [];


let finish = require('./finish.js');
finish(graph,paths);
let writeAnts = require('./ants');
writeAnts(ants);
let move = require('./move');
let remove = require('./remove');
while (paths[6].ants.length+paths[5].ants.length+paths[3].ants.length<10) {
    move(ants[0],paths);
    move(ants[1],paths);
    move(ants[2],paths);
    move(ants[3],paths);
    move(ants[4],paths);
    move(ants[5],paths);
    move(ants[6],paths);
    move(ants[7],paths);
    move(ants[8],paths);
    move(ants[9],paths);
    remove(paths)
}
//console.log(graph);
for (let x = 0; x < paths.length;x++) {
    let road ;
    if (x===0){
        road ='из 1-ой вершины в 2-ую'
    }
    else if (x ===1){
        road='из 1-ой вершины в 3-ью'
    }
    else if (x ===2){
        road='из 1-ой вершины в 4-ую'
    }
    else if (x ===3){
        road='из 2-ой вершины в 5-ую'
    }
    else if (x ===4){
        road='из 2-ой вершины в 3-ью'
    }
    else if (x ===5){
        road='из 3-ей вершины в 5-ую'
    }
    else if (x ===6){
        road='из 4-ой вершины в 5-ую'
    }
    console.log(paths[x].phermon +' феромонов на пути '+road);
}
console.log();
for (let x = 0; x < ants.length;x++) {
    console.log(ants[x].path +' путь пройденный муравьем '+(x+1));
}
//console.log(ants);
