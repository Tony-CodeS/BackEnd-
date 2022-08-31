// Array Methods
// Functions: function declaration, function expression(arrow function), IIFE(immediately invoked function expression)
// Globals: _dirname, _filename, require
//module.exports

const animals = [];

//adding an item to the array 
// remove from the front
//remove from the back
// iterate through the array
//search the array for an item



//adding an item to the array 
//. push add to the end of the  array

animals.push(`cat`)
animals.push(`dog`)
//.pop remove from the back of the array
animals.pop()
animals.push(`dog`)
animals.push(`pig`)
animals.push(`sheep`)
//. shift deletes from the front of the array
animals.shift()

//.push
animals.push(`cat`)

//.unshift adds from the front
animals.unshift(`Goat`)

//iterating through an array
// animals.map((animal)=>{

//  console.log(animal.indexOf('cat'))
// })

//index of
console.log(animals) 
const cat = animals.indexOf('cat')
console.log(cat)

//filter
console.log(animals) 
const newAnimal = animals.filter((animal) => animal.length > 3 )
console.log(newAnimal)

//find
let newAnimals = animals.find((animal) => animal == 'dog')
console.log(newAnimals)
newAnimals = 'elephant'
console.log(newAnimals)


///functions and function de
function Addnumber(a, b){
    const total = a + b
    console.log(total)
    //function declaration
}

Addnumber(1,4)


const AddTotal = (a, b)=>{
    const total = a + b
    console.log(total)
    //function expression
}
AddTotal(9,8)


// (function addFigures (a, b){
//     const total = a + b
//     console.log(total)

// })(1,7)
const name = `John Doe`
module.exports = {Addnumber, name}