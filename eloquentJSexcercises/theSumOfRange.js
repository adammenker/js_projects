// The sum of a range

// Your code here.
const range = (start, end, step) =>{
    array = [];
    if(step == undefined) step = 1;
    for(let begin = start; begin != end; begin += step){
      array = array.concat(begin);
    }
    array = array.concat(end);
    return array;
  }
  
  function sum(myArray){
    let sumValue = 0;
    for(let number of myArray){
        sumValue += Number(number);
    }
    return sumValue;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55