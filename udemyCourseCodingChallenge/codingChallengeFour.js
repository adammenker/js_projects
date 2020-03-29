let john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function(){
        this.BMI = (this.mass / (this.height * this.height));
        return this.BMI;
    },
};

let mark = {
    fullname: 'Mark Doe',
    mass: 78,
    height: 1.69,
    calculateBMI: function(){
        this.BMI = (this.mass / (this.height * this.height));
        return this.BMI;
    },
};

john.calculateBMI();
mark.calculateBMI();

function compare(object1, object2){
    if(object1.BMI > object2.BMI){console.log(object1.fullname + ` has a higher BMI`);}
    else if(object1.BMI < object2.BMI){console.log(object2.fullname + ` has a higher BMI`);}
    else{console.log('they have equal BMI');}
}

compare(john, mark);




