class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(inputVector){
        this.x = this.x + inputVector.x;
        this.y = this.y + inputVector.y;
        return this;
    }
    minus(inputVector){
        this.x = this.x - inputVector.x;
        this.y = this.y - inputVector.y;
        return this;
    }

    get length(){
        let cSquared = (this.x * this.x) + (this.y * this.y);
        let c = Math.sqrt(cSquared);
        return c;
    }
}

/* test cases 
vector1 = new Vec(10, 20);
vector2 = new Vec(5, 10);

vector1.plus(vector2);
console.log(vector1); 

console.log(vector2.length);
*/
