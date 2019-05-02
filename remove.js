module.exports= (paths)=>{
    for (let x=0; x<paths.length;x++) {
        if( paths[x].phermon!==0.05) {
            paths[x].phermon = paths[x].phermon - 0.05;
        }
    }

};