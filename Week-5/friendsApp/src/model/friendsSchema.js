const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            require:true
        },
        
        age:{
            type: String
        }
    },
    {
        timestamps:true
    }
)

const FriendsModel = mongoose.model('friend', friendSchema )

module.exports = FriendsModel