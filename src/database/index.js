const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<Password>@cluster0.l7orv.mongodb.net/NodeBD2?retryWrites=true&w=majority');
mongoose.Promise =  global.Promise;


module.exports = mongoose;