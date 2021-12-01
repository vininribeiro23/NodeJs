const { Schema } = require('mongoose');
const mongoose = require('../database');

const CoberturaSchema = new mongoose.Schema({
    seguro_id:{
        type: String,
        require: true
    },
    name:{
        type:String,
        require: true,
    },
    factor:{
        type: String,
        require: true
    },

  
})

const CoberturaUserSchema = new Schema ({
    seguro:{type: mongoose.Schema.Types.ObjectId,ref: 'seguro'}
})
const userSchema = new Schema({
    name: String,
    seguro:[CoberturaUserSchema]
})

const Cobertura = mongoose.model('Cobertura', CoberturaSchema)

module.exports = Cobertura; 