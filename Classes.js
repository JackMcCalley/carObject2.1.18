// Story: As a programmer, I can make a car.
// Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.
// Story: As a programmer, I can tell how many wheels a car has; default is four.

class Car{
  constructor(){
    this.wheels = 4
    this.lights = false
    this.blinkerRight = false
    this.blinkerLeft = false
    this.speed = 0
  }

  lightsOn(){
    if(this.lights == false){
      this.lights = true
    }
  }

  lightsOff(){
    if(this.lights == true){
      this.lights = false
    }
  }

  lightStatus(){
    if(this.lights == true){
      console.log("The lights are on")
    } else {
      console.log("The lights are off")
    }
  }

  blinkerRightOn() {
    if(this.blinkerRight == false) {
      this.blinkerRight = true
      this.blinkerLeft = false
    }
  }

  blinkerLeftOn() {
    if(this.blinkerLeft == false) {
      this.blinkerLeft = true
      this.blinkerRight = false
    }
  }

  blinkerOff() {
    if(this.blinkerRight == true) {
      this.blinkerRight = false
    } else if (this.blinkerLeft == true) {
      this.blinkerLeft = false
    }
  }

  blinkerStatus() {
    if(this.blinkerRight == true) {
      console.log("Right blinker is on")
    } else if (this.blinkerLeft == true) {
      console.log("Left blinker is on")
    } else if (this.blinkerRight == false && this.blinkerLeft == false) {
      console.log("Blinkers are off")
    }
  }

  currentSpeed() {
    console.log(`Your current speed is: ${this.speed}`)
  }


}

let myCar = new Car()


//
// Story: As a programmer, I can make a Tesla car.
// Hint: Create an variable called myTesla which is of class Tesla which inherits from class Car.

class Tesla extends Car {
  constructor(modelYear){
    super()
    this.modelYear = modelYear
    this.model = "Tesla"
  }

  accelerate(){
    this.speed +=10
  }

  decelerate(){
    this.speed -= 7
  }

  carInfo(){
    console.log(`Your Tesla's model year is: ${this.modelYear}`)
    console.log(`It has ${this.wheels} wheels`)
    super.currentSpeed()
    super.lightStatus()
    super.blinkerStatus()
  }
}

let myTesla = new Tesla(2008)

// Story: As a programmer, I can make a Tata car.

class Tata extends Car {
  constructor(modelYear){
    super()
    this.modelYear = modelYear
    this.model = "Tata"
  }

  accelerate(){
    this.speed += 2
  }

  decelerate(){
    this.speed -= 1.25
  }

  carInfo(){
    console.log(`Your Tata's model year is: ${this.modelYear}`)
    console.log(`It has ${this.wheels} wheels`)
    super.currentSpeed()
    super.lightStatus()
    super.blinkerStatus()
  }
}

let myTata = new Tata(1983)

// Story: As a programmer, I can make a Toyota car.

class Toyota extends Car {
  constructor(modelYear){
    super()
    this.modelYear = modelYear
    this.model = "Toyota"
  }

  accelerate(){
    this.speed += 7
  }

  decelerate(){
    this.speed -= 5
  }

  carInfo(){
    console.log(`Your Toyota's model year is: ${this.modelYear}`)
    console.log(`It has ${this.wheels} wheels`)
    super.currentSpeed()
    super.lightStatus()
    super.blinkerStatus()
  }
}

let myToyota = new Toyota(2018)


//Collection of two of each kind of vehicle

let myTesla2 = new Tesla(2000)
let myTata2 = new Tata(2011)
let myToyota2 = new Toyota(1975)

var garage = [myTesla, myTesla2, myTata, myTata2, myToyota, myToyota2]

console.log(garage)

//Sort array by model year

var garageByYear = garage.sort(function(a,b) {
  return a.modelYear - b.modelYear
})

//Sort array by model name

var garageByModel = garage.sort(function(a, b) {
  var modelA=a.model.toLowerCase(), modelB=b.model.toLowerCase()
  if(modelA < modelB) {
    return -1
  }
  if(modelA > modelB) {
    return 1
  }
  return 0
})

//Sort array by model name and then modelYear

var garageByModelThenYear = garage.sort(function(a, b) {
  return a["model"] - b["model"] && a["modelYear"] - b["modelYear"]
})
