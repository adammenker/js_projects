
let myObj = {
    age: 10,
    height: 11,
    weight: 12,
}

myObj[Symbol.iterator] = function(){
    let properties = Object.keys(myObj);
    let count = 0;
    let isDone = false;
    let check = 0;

    let next = () =>{
        if(count >= properties.length - 1){
            isDone = true;
        }
        if(check >= 1){
            count++;
        }
        check++;

        return {done: isDone, value: this[properties[count]]};
    }
    return {next};
};

for(let property of myObj){
    console.log(`property --> ${property}`);
}