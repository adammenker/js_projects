// parks

class Park {
    constructor(treeCount = 0, area = 0, age = 0, name = 'no name'){
        this.treeCount = treeCount;
        this.area = area;
        this.age = age;
        this.name = name;
    }
    calculateDensity(){
        return (this.treeCount / this.area);
    }
}

let calculateAverageAge = (arrayOfParks) => {
    let total = 0;
    let i = 0;
    let average = 0;
    for(let park of arrayOfParks){
        i++;
        total += park.age;
    }
    average = (total / i);
    return average;
}


let moreThan1000Trees = (arrayOfParks) => {
    let i = 0;
    for(let park of arrayOfParks){
        if(park.treeCount > 1000){
            return park.name;
        }
    }
}


let displayParks = (arrayOfParks) => {
    console.log(`----Parks Report----\nOur ${arrayOfParks.length} parks have an average age of ${calculateAverageAge(arrayOfParks)}`);
    for(let park of arrayOfParks){
        console.log(`${park.name} has a tree density of ${park.calculateDensity()}`);
    }
}


let NationalPark = new Park(1500, 50, 100, 'National Park');

let VillagePark = new Park(500, 30, 50, 'Village Park');

let parks = [NationalPark, VillagePark];

// console.log(moreThan1000Trees(parks));
// console.log(calculateAverageAge(parks));
// console.log(NationalPark.calculateDensity());

// Streets

class Street{
    constructor(distance, age, size = 'normal', name){
        this.distance = distance;
        this.age = age;
        this.size = size;
        this.name = name;
    }
}

let calculateAverageLength = (arrayOfStreets) => {
    let total = 0;
    let i;
    for(i = 0; i < arrayOfStreets.length; i++){
        total += arrayOfStreets[i].distance;
    }   
    return total / i;
}


let calculateTotalLength = (arrayOfStreets) => {
    let total = 0
    for(let i = 0; i < arrayOfStreets.length; i++){
        total += arrayOfStreets[i].distance;
    }   
    return total;
}

let displayStreets = (arrayOfStreets, total, average) => {
    console.log(`----Streets Report----\nOur ${arrayOfStreets.length} streets have a total length of ${total} km and and average length of ${average}km`);
    for(let street of arrayOfStreets){
        console.log(`${street.name}, built in ${street.age}, is a ${street.size} street`);
    }
}


let ElmStreet = new Street(5, 1990, undefined, 'Elm Street');
let MainStreet = new Street(12, 1950, 'huge', 'Main Street');

let streets = [ElmStreet, MainStreet];


displayParks(parks);
displayStreets(streets, calculateTotalLength(streets), calculateAverageLength(streets));