const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vininribeiro:<password>@cluster0.l7orv.mongodb.net/Node?retryWrites=true&w=majority');
mongoose.Promise =  global.Promise;


module.exports = mongoose;