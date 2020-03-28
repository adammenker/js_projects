// Your code here.

function loop(value, testFunction, updateFunction, bodyFunction){
  let bool = testFunction(value);
  if(bool == false){return;}
  
  bodyFunction(value);
  
  value = updateFunction(value);
  loop(value, testFunction, updateFunction, bodyFunction);
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1