// const data = require ('../model/data')
const FriendsModel = require('../model/friendsSchema')

const createFriend = async (req, res)=>{
    // res.status(200).send("data")
    // const person = req.body
    // data.push(person)
    // res.status(201).json(person)

    //Mongoose Method

const {name, age} = req.body
const smallName = name.toLowerCase()
try{
const newFriend = await FriendsModel.create({name:smallName,age})
newFriend.save()
res.status(200).send({sucess:true, message:'successfully created friend', data:newFriend})
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
    const updatePerson = await FriendsModel.findByIdAndUpdate(id, filter) 
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


module.exports ={
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search
}
