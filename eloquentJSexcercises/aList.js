// Your code here.

arrayToList = (array) =>{
  let list = null;
  // console.log(array.length);
  for(let i = array.length - 1; i >= 0; i--){
  	list = {value: array[i], rest: list};
  }  
  
  return list;
}


listToArray = (list)=>{
  array = [];
  let listTemp = list;
  while(listTemp != null){
    array.push(listTemp.value);
    listTemp = listTemp.rest;
  }
  
  return array;
}


let prepend = function(element, list){
  let tempList = {};
  tempList.value = element;
  tempList.rest = list;
  
  return tempList;
}

let nth = function(list, position){
  let temporaryNode = list; // is a reference to the first object of list
  for(let i = 0; i < position; i++){
    temporaryNode = temporaryNode.rest; // sets temp to the next object until the 'position' object is reached
  }
  if(temporaryNode.value === undefined || temporaryNode.value === null){
    console.log("error: segmentation fault, returning undefine");
    return undefined;
  }
  return temporaryNode.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
 console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
 console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20