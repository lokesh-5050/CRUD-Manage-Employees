const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/manager')

const userSchema =  mongoose.Schema({
  name:String,
  email:String,
  address:String,
  phone:Number

})

module.exports = mongoose.model('user' , userSchema)