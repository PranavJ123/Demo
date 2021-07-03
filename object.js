console.log("Here we learn about object literals.");

let car = {
    name : 'Ciaz',
    topSpeed : 160,
    run : function(){
        console.log("Car is running");
    }
}

console.log(car);

//Creating a constructor for cars
function GeneralCar(givenName,givenSpeed){
    this.name = givenName,
    this.speed = givenSpeed,
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200-this.speed} Km/H than BMW`);
    }
}
car1 = new GeneralCar('Ciaz',160);
car2 = new GeneralCar('Mercedes',180);
car3 = new GeneralCar('BMW',200);
console.log(car3);




