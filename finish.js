let path1to2 = {

    lengz:3,
    phermon:2,
    ants:[],
};
let path1to3 = {
    lengz:5,
    phermon:2,
    ants:[],
};
let path1to4 = {
    lengz:30,
    phermon:2,
    ants:[],
};
let path2to3 = {
    lengz:4,
    phermon:2,
    ants:[],
};
let path2to5 = {
    lengz:23,
    phermon:2,
    ants:[],
};
let path3to5 = {
    lengz:20,
    phermon:2,
    ants:[],
};
let path4to5 = {
    lengz:10,
    phermon:2,
    ants:[],

};
let point1  ={
    index:1,
    lengthTo2 :3,
    lengthTo3 :5,
    lengthTo4 :30

};
let point2  ={
    index:2,
    lengthTo3 :4,
    lengthTo5 :23

};
let point3  ={
    index:3,
    lengthTo5 :20

};
let point4  ={
    index:4,
    lengthTo5 :10

};
let point5  ={
    index:5
};
module.exports= (graph,paths)=>{
  graph.push(point1,point2,point3,point4,point5);
  paths.push(path1to2,path1to3,path1to4,path2to5,path2to3,path3to5,path4to5);

};