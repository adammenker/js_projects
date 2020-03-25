// reversing an array

// Your code here.

const reverseArray = (array) =>{
  newArray = [];
  backwardsIndex = array.length - 1;
  for(let element of array){
    newArray = newArray.concat(array[backwardsIndex]); 
    backwardsIndex--;
  }
  return newArray;
}

const reverseArrayInPlace = (inputArray) =>{
  backwardsIndex = inputArray.length - 1;
  let frontIndex = 0;
  for(let count = 0; count < (inputArray.length / 2); count++){
    let hold = inputArray[frontIndex];
    inputArray[frontIndex] = inputArray[backwardsIndex];
    inputArray[backwardsIndex] = hold;
    
    frontIndex++;
    backwardsIndex--;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);