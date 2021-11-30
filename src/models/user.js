const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },

    age:{
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    number:{
        type: String,
        require: true
    },
    zipcode:{
        type: String,
        require: true
    },
   
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User; 