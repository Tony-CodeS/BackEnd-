// Asychronous nature of node

setTimeout(()=>{
    console.log('Statement Number One')
}, 9000)

console.log('Statement Number Two')
console.log('Statement Number Three')

// Class, Objects and Arrays, Accessing items (dot and bracket notation)
// A class is a template for creating an Object

//object

const animals ={
    name:`dog`,
    sound: `bark`
}
console.log (animals)

//class
class Animals {
constructor(name, sound) {
    this.name = name;
    this.sound = sound; 
}
}
 const newAnimal = new Animals('pig', 'grunt')

 console.log(newAnimal)

 //Array
 const animalcollection =['dog', 'cow', 'peacock']
 console.log(animalcollection)