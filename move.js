module.exports= (ant,paths)=>{
    if (ant.location===1){
        //math
        let chanseOf1to2= 100 *(paths[0].phermon/paths[0].lengz)/(paths[0].phermon/paths[0].lengz+(paths[1].phermon/paths[1].lengz+(paths[2].phermon/paths[2].lengz)));
        let chanseOf1to3= 100 *(paths[1].phermon/paths[1].lengz)/(paths[0].phermon/paths[0].lengz+(paths[1].phermon/paths[1].lengz+(paths[2].phermon/paths[2].lengz)));
        let chanseOf1to4= 100 - chanseOf1to3 - chanseOf1to2;
       // console.log(chanseOf1to2 +' 1 to 2');
       // console.log(chanseOf1to3 +' 1 to 3');
        // console.log(chanseOf1to4 +' 1 to 4');
        let random= Math.random()*100;
        if (random>chanseOf1to2+chanseOf1to3){
            ant.path.push(4);
            paths[2].ants.push(ant);
            paths[2].phermon= paths[2].phermon+ (1/paths[2].lengz);
            ant.location = 4;
        }
        else if (random>chanseOf1to2) {
            ant.path.push(3);
            paths[1].ants.push(ant);
            paths[1].phermon= paths[1].phermon+ (1/paths[1].lengz);
            ant.location = 3;
        }
        else {
            ant.path.push(2);
            paths[0].ants.push(ant);
            paths[0].phermon= paths[0].phermon+ (1/paths[0].lengz);
            ant.location = 2;
        }
    }
    else if (ant.location===2) {
        //math
        let chanseOf2to3=100*(paths[4].phermon/paths[4].lengz)/(paths[4].phermon / paths[4].lengz+(paths[3].phermon/paths[3].lengz));
        let chanseOf2to5= 100 -chanseOf2to3;
       // console.log(chanseOf2to3 +' 2 to 3');
        // console.log(chanseOf2to5 +' 2 to 5');
        let random= Math.random()*100;
        if (random<chanseOf2to3){
            ant.path.push(3);
            paths[4].ants.push(ant);
            paths[4].phermon= paths[4].phermon+ (1/paths[4].lengz);
            ant.location = 3;
        }
        else {
            ant.path.push(5);
            paths[3].ants.push(ant);
            paths[3].phermon= paths[3].phermon+ (1/paths[3].lengz);
            ant.location = 5;
        }

    }
    else if (ant.location===3) {
        ant.path.push(5);
        paths[5].ants.push(ant);
        paths[5].phermon= paths[5].phermon+ (1 / paths[5].lengz);
        ant.location = 5;
    }
    else if (ant.location===4) {
        ant.path.push(5);
        paths[6].ants.push(ant);
        paths[6].phermon= paths[6].phermon+ (1/paths[6].lengz);
        ant.location = 5;
    }
    else if (ant.location===5) {

    }
};