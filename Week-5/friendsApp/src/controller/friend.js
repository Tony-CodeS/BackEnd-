// const data = require ('../model/data')
const FriendsModel = require('../model/friendsSchema')
const bcrypt = require('bcrypt')
const createFriend = async (req, res)=>{
    // res.status(200).send("data")
    // const person = req.body
    // data.push(person)
    // res.status(201).json(person)

    //Mongoose Method

const {name, age, phoneNumber, email, password} = req.body

const smallName = name.toLowerCase()
try{
    const friend = await FriendsModel.findOne({email})

if (friend) return res.status(400).json({
    sucess:false,
    message:"email already exist"
})

let hashedPassword = await bcrypt.hash(password, 12)
const newFriend = await FriendsModel.create({name:smallName,
age,
phoneNumber, 
email,
password:hashedPassword})
await newFriend.save()
delete newFriend._doc.password  //to remove the password

res.status(200).send({sucess:true,
 message:'successfully created friend',
data:newFriend})
} catch(error){
res.status(400).json({sucess:false, message:'error'})
}
}

const getFriend = async (req, res)=>{
    // const id = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // res.status(200).send(onePerson)
    try{
     const id = req.params.personId
     const onePerson = await FriendsModel.findById(id).exec();
     res.status(200).send(onePerson)
    }
    catch (error){
        console.log(error)
    }
   


}


const getFriends = async (req, res)=>{
 //  res.status(200).send(data)
 //mongoose method
const friends =  await FriendsModel.find({});
res.status(200).send(friends)
}


const updateFriend = async (req, res)=>{
//     const payLoad = req.body
//     const id = req.params.personId
//     //const onePerson = data.find((person) => person.id == id )
//    const updatePerson = await  FriendsModel.findByIdAndUpdate(id)           
//    const final =   updatePerson.name = payLoad.name
//     res.status(200).send(final)
    const filter = req.body
    const id = req.params.personId
    const updatePerson = await FriendsModel.findByIdAndUpdate(id, filter, {new:true}) 
    // {
    //     returnOriginal: false
    // }
    res.send(updatePerson)
}
// console.log(typeof (req.params))
const deleteFriend = async (req, res)=>{
    // const id = req.params.personId
    // const newPeople= data.filter((person) => person.id !== Number(id) )
  
    // res.status(200).send(newPeople)
    try{
        const id = req.params.personId
    const newPeople = await FriendsModel.findByIdAndRemove(id) 
    res.send(newPeople)
    }
    catch (error){
        console.log(error)
    }
}

const search = async (req, res)=>{
    const id = req.params.id
    // const {q} = req.query
    //  await FriendsModel.find({name:q}, (error, data) => {
    //     if (!error){
    //     res.send(data)
    //     }

    // })
  // res.status(200).send(result)
}
     //const result = data.find((person) => person.name === q )
     //const result = data.filter((person) => person.name.includes(q) )
     //const result = data.filter((person) => person.name.startsWith(q) )

//regular expression for querying data


module.exports ={
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search
}
