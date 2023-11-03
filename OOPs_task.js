// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title,studio,rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    gettPG(title,studio,rating) {
        if (this.rating === "PG"){
            return `Movie name : ${this.title} from studio : ${this.studio} with rating : ${this.rating}`;
        }
        else {
            return `Rating is not exact PG`;
        }
    }
}

const hollywood = new Movie('Casino Royale','Eon Productions','PG­13');
console.log(hollywood.gettPG());

// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


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




