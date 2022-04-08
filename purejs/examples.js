let first_name = "Gaetano"
let lastName = "Pellegrino"
let age = 30
let height= 1.75
let isHeCool = true 
let job = null | undefined

let first_name = "Gaetano"


{
  let first_name = "Mario"
  console.log(first_name)
}
let person = {
    first_name: "Gaetano",
    lastName: "Pellegrino",
    age: 30,
    height: 1.75,
    isHeCool: true,
}

person.first_name // "Gaetano"
person.first_name = "Mario"

let car = {
    brand: "Fiat",
    model: "500",
    color: "white",
    year: "2018",
    isNew: true,
    startEngine: function(){
        console.log("Vroom")
    },
    turnLightOn: function(){
        console.log("Lights on")
    },
    stopEngine: function(){
        console.log("Stopping")
    },
    turnLightOff: function(){
        console.log("Lights off")
    },
    onEngineStart: function(){
        console.log("Engine started")
    }

} 
function fullName(first_name, lastName){
    return first_name + " " + lastName
}


function changeName(name){
  first_name = name
}
changeName("Mario") // 

function action(name, action){
  return name + "is doing " + action
}

let myName = fullName(first_name, lastName) // Gaetano Pellegrino
let doing = action(myName, "running") // Gaetano Pellegrino is doing running

function add (a, b){
    return a + b
}

let sum = add(1,2) // 3



function multiply(a, b){
    return a * b
}

let product = multiply(2,3) // 6


// ARRAY
let myArray = [1,2,3,4,5] // myArray[4] = 5
let myFriends = ["Mario", "Luigi", "Peach"] // myFriends[2] = Peach
let myFav = ["Mario", 1,3,"Luigi", "Peach",5] // myFav[3] = Luigi
let myGarage = [
  { brand: "Fiat", model: "500", color: "white", year: "2018", isNew: false},
  { brand: "Bmw", model: "520", color: "red", year: "2010", isNew: false},
  { brand: "Ferrari", model: "Maranello", color: "red", year: "2022", isNew: true},
]

myGarage[0].startEngine() // Vroom

i++
i = i + 1
i += 1
for(let i = 0; i < myGarage.length; i++){
    console.log(myGarage[i])
}



