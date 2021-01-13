class Person {
    constructor(name = 'Anonymous',age = 0){
        this.name = name
        this.age = age
    }
    getGreetings(){
        return `Hi. I'm ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s)old.`
    }
}

class Studend extends Person { //chield class
    constructor (name, age, major) { //using constructor
        super (name, age)            //we need to pass the info to super (parent class)
        this.major = major           //then use the info we are looking for
    }
    hasMajor() {
        return !!this.major
    }

    getDescription() {  //we can also override methotd from parent classes
        let description = super.getDescription()
        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }

    getGreetings(){
        let greetings = super.getGreetings()
        if(this.hasHomeLocation){
            greetings += `I'm visiting from ${this.homeLocation}.`
        }
        return greetings
    }
}



const me = new Traveler ('Henrique Nogueira',35,'Taubate')
console.log(me);
console.log('Greetings => '+me.getGreetings())
console.log('Description => '+me.getDescription());

const other = new Studend()
console.log(other);
console.log('Greetings => '+other.getGreetings())
console.log('Description => '+other.getDescription());
