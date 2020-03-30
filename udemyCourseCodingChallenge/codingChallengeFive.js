john = {
    bills: [124, 48, 268, 180, 42],
    tip: [],
    totals: [],
    calcTipAndTotal: function(){
        let i = 0;
        for(element of this.bills){
            if(element < 50){this.tip.push(element * .2);}
            else if(element < 200){this.tip.push(element * .15);}
            else{this.tip.push(element * .1);}
            this.totals[i] = element + this.tip[i];
            i++;
        }
    },
}

mark = {
    bills: [77, 375, 110, 45],
    tip: [],
    totals: [],
    calcTipAndTotal: function(){
        let i = 0;
        for(element of this.bills){
            if(element < 100){this.tip.push(element * .2);}
            else if(element < 300){this.tip.push(element * .1);}
            else{this.tip.push(element * .25);}
            this.totals[i] = element + this.tip[i];
            i++;
        }
    },
}

const averageTip = (object) =>{
    let total = 0;
    let counter = 0;
    for(element of object.tip){
        total += element;
        counter++;
    }
    return (total/counter);
}


john.calcTipAndTotal();
mark.calcTipAndTotal();

john.avgTip = averageTip(john);
mark.avgTip = averageTip(mark);

console.log(john);
console.log(mark);

if(john.avgTip> mark.avgTip){console.log("john's family paid a higher tip amount on average");}
else{console.log("mark's family paid a higher average tip amount")};