const mongoose = require('../database');

const SeguroSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    }

  
})

const Seguro = mongoose.model('Seguro', SeguroSchema)

module.exports = Seguro; 