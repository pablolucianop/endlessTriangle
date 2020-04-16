
var point= [1,1]

//returns coordinates of points that surrounds one given point(in a squared way)
surroundPoint =(point)=>{
var surround = []
var margin =1

    surround.push(
        [point[0]-margin,point[1]+margin],
        [point[0]-margin,point[1]-margin],
        [point[0]-margin,point[1]],
        [point[0],point[1]+margin],
        [point[0],point[1]-margin],
        [point[0]+margin,point[1]],
        [point[0]+margin,point[1]-margin],
        [point[0]+margin,point[1]+margin]    )
    return surround
}

//check if two coordinates are equals and return true or false
twoCoordinatesEqual =(coord1, coord2)=>{
    if(coord1[0]=== coord2[0] && coord1[1]=== coord2[1]){
        return true
    } else{
        return false
    }
}

//find and index a given coordinate in a coordinates array
findAndIndexThisCoordianteInArray=(coord, array)=>{
    var indexesMatches=[]
    array.forEach((element, index) => {
    if (twoCoordinatesEqual(element, coord)) {indexesMatches.push(index)}
    })
    return indexesMatches
}





//return an array without duplicates values
uniq=(a)=> {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}



//returns an index of where in array2 you can find the coordinates in array1
idexMatchingCoords = (array1,array2)=>{
    var indexTotalMatches = []
    array1.forEach((element) => {
        if (findAndIndexThisCoordianteInArray(element, array2).length>0) {indexTotalMatches.push (findAndIndexThisCoordianteInArray(element, array2))}
    })
    return uniq(indexTotalMatches.flat())
}



arrayMinusArrayOfCoords = (thisArray,minusThisArray)=>{
    var substractionResult=minusThisArray

    for (var i = 0; i < idexMatchingCoords(thisArray,minusThisArray).length; i++) {
        substractionResult.splice(idexMatchingCoords(thisArray,minusThisArray)[i],1)
    }
return substractionResult
}





var a1=[[0,0],[0,1]]
var a2=[[0,0],[0,1]]

console.log(arrayMinusArrayOfCoords(a2,a1), ' resutlado subtrac')
