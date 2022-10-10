const mongoose = require('mongoose')

const connectDb =async ()=>{
   await mongoose.connect('mongodb+srv://Anthony:t0pyn0123@cluster0.rfnqkhg.mongodb.net/friends_DB')
    console.log('connected to database')
}
//('mongodb+srv://Anthony:t0pyn0123@cluster0.rfnqkhg.mongodb.net/?retryWrites=true&w=majority')
module.exports = connectDb