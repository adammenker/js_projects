let arrays = [[1, 2, 3], [4, 5], [6], 7, [8, 9, 10, 11]];
// Your code here.

function reduce(array){
  let newArray = [];
  for(element of array){
    newArray = newArray.concat(element);
  }
  return newArray;
}

console.log(reduce(arrays));