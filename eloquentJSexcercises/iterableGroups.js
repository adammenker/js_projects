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

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.group.length) {
            
    } 
        else {
            let result = {value: this.group.group[this.position], done: false};
            this.position++;
            return result;
        }
    }
}



let group1 = new Group;
group1.add(1);
group1.add(2);



for(let property of group1){
    console.log(`property --> ${property}`);
}