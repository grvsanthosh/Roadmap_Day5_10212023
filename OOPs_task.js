// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title,studio,rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    // tried with filter array method
    // gettPG(title,studio,rating) {
    //     if (this.rating === "PG"){
    //         return `Movie name : ${this.title} from studio : ${this.studio} with rating : ${this.rating}`;
    //     }
    //     else {
    //         return `Rating is not exact PG`;
    //     }
    // }

    getPG(movies){
        return movies.filter((val) => val.rating === 'PG');
    }
}

const Casino = new Movie('Casino Royale','Eon Productions','PG13');
const LEO = new Movie('LEO','sun pictures','PG');
const kathi = new Movie('kathi','LYCA','PG');
console.log(Casino.getPG([Casino, LEO, kathi]));

// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(radius, color){
        this.Radius = radius;
        this.Color = color;
    }

    getRadius(){
        return `radius: ${this.Radius.toFixed(2)}`;
    }

    setRadius(radiusval){
        this.Radius = radiusval;
        return `radius value is set to ${this.Radius}`;
    }

    getColor(){
        return ` color: ${this.Color}`;
    }

    setColor(colorval){
        this.Color = colorval;
        return `color value is set to ${this.Color}`;
    }
    toString(){
        return `Both radius: ${this.Radius.toFixed(2)} and color: ${this.Color}`;
    }

    getArea(){
        return ` Area: ${(3.14*(this.Radius.toFixed(2)**2)).toFixed(2)}`;
    }

    getCircumference(){
       return `Circumference: ${(2*3.14*this.Radius.toFixed(2)).toFixed(2)}`; 
    }


}

const c1 = new Circle(2.3,"red");
const c2 = new Circle(3,"black");
const c3 = new Circle(5,"green");
const c4 = new Circle(4.3,"blue");

console.log(c1.getRadius());
console.log(c1.getColor());
console.log(c1.toString());
console.log(c1.getArea());
console.log(c1.getCircumference());

// post setting up values
console.log(c1.setRadius(2));
console.log(c1.setColor("orange"));
console.log(c1.getRadius());
console.log(c1.getColor());
console.log(c1.toString());
console.log(c1.getArea());
console.log(c1.getCircumference());
// Write a “person” class to hold all the details.

class Person {
    constructor(Name,FatherName,Gender,Age,Place,Company,Role){
        this.name = Name;
        this.fname = FatherName;
        this.gender = Gender;
        this.age = Age;
        this.place = Place;
        this.company = Company;
        this.role = Role;
    }
    details(Name,FatherName,Gender,Age,Place,Company,Role){
        return ` Name : ${this.name}, gender : ${this.gender}, age : ${this.age}, place : ${this.place}, company : ${this.company}, role : ${this.role}`;
    }
}

const attender = new Person('John', 'Michael', 'male', 23, 'chennai', 'ABB', 'ATTENDER');

const engg = new Person('RAM', 'Mohan', 'male', 23, 'chennai', 'ABB', 'ENGINEER');  
console.log(attender.details()); 
console.log(engg.details());

// write a class to calculate the uber price.

class Taxi_price{
    constructor(Service,Kilometer){
        this.serviceProvider = Service;
        this.distance = Kilometer;
        this.price;
    }
    getPrice(Service,Kilometer){
        this.price = this.distance * 10;
        return ` The service provider '${this.serviceprovider}' has charged rupees ${this.price} for distance ${this.distance}`;
    }
    
}

const uber = new Taxi_price("Uber","22");
console.log(uber.getPrice());




