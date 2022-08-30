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

 class Workers {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
 }

 const newWorker = new Workers('Praise', 'Okolie')
 const newWorker1 = new Workers('Anthony', 'Okolie')
 const newWorker2 = new Workers('Edozie', 'Oko')
 const newWorker3 = new Workers('Nike', 'Adetutu')
 const newWorker4 = new Workers('Ogbara', 'Kehinde')

 const WorkersList =[]
 WorkersList.push(newWorker)
 WorkersList.push(newWorker1)
 WorkersList.push(newWorker3)
 WorkersList.push(newWorker2)
 WorkersList.push(newWorker4)
//  console.log(WorkersList)

class Amount{
    constructor(expenses, amount){
        this.expenses = expenses;
        this.amount = amount;
    }
}

const NewAmount = new Amount ('fuel', '1000')
const NewAmount1 = new Amount ('water', '10000')
const NewAmount2 = new Amount ('food', '5000')
const NewAmount3 = new Amount ('transport', '3000')
const NewAmount4 = new Amount ('miscellaneous', '1000')
const NewAmount5 = new Amount ('cosmetics', '1000')
 const AmountList =[]
 
 AmountList.push(NewAmount)
 AmountList.push(NewAmount1)
 AmountList.push(NewAmount2)
 AmountList.push(NewAmount3)
 AmountList.push(NewAmount4)
 AmountList.push(NewAmount5)

 const Company =[]
 Company.push(WorkersList)
 Company.push(AmountList)

 console.log(Company)