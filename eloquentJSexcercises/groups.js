class Group{
    constructor(){
        this.group = []
    }
    add(value){
        let test = 1;
        for(let index of this.group){
            if(value === index){
                test = 0;
            }
        }
        if(test === 1){
            this.group.push(value);
        }
        else{console.log(`'${value}' already in set, item not added`);}
    }
    delete(value){
        let test = 1;
        for(let index of this.group){
            if(value === index){
                this.group = this.group.filter(function(index) {
                    return index !== value;
                })
            }
        }
    }
    has(value){
        let test = 0;
        for(let index of this.group){
            if(value === index){
                test = 1;
            }
        }
        if(test === 1){
            return true;
        }
        else{return false;}
    }
    static from(iterable){
        let newGroup = new Group;
        for(let index of iterable){
            newGroup.add(index);
        }
        return newGroup;
    }
}

/* test cases
myArr = [1, 2, 3, 4];
group1 = new Group;

group1 = Group.from(myArr);
group1.add(1);
console.log(group1);

console.log(group1.has(1));
console.log(group1.has(5));

group1.delete(1);
group1.delete(1);
group1.delete(3);
console.log(group1);
*/
