console.log("Here we learn about inheritance using ES6 classes in js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and my company is the best.`;
    }
    joiningYear() {
        return 2021 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}
let empObj = new Employee("Pranav", 2, "Division");
console.log(empObj.joiningYear());
console.log(empObj.joiningYear());
console.log(Employee.add(12, 23));

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favouriteLanguage() {
        if (this.language == 'javascript') {
            return "Javascript";
        }
        else {
            return "PHP";
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}

let progObj = new Programmer("Pranav", 3, "Lays", "PHP", "PranavJ123");
console.log(progObj);
console.log(progObj.favouriteLanguage());
console.log(Programmer.multiply(8, 7));

