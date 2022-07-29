var express = require('express');
var router = express.Router();
var userModel = require("./users")  

/* GET home page. */

router.get("/", (req,res)=>{
  userModel.find()
  .then(function(elem){
    res.render('index', {data:elem})
  })
})





router.post("/create", (req,res)=>{
  userModel.create({
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,
    phone:req.body.phone
  })
  .then(function(userCreated){
    res.redirect("/")
  })
})


router.get("/delete/:id", (req,res)=>{
  userModel.deleteOne({_id:req.params.id})
  .then(function(deleted){
    res.redirect("/")
  })
})


router.get("/update/:id", (req,res)=>{
  userModel.findOne({_id:req.params.id})
  .then(function(user){
    res.render("update", {user})
  })
})

router.post("/updating/:id", (req,res)=>{
 userModel.findOneAndUpdate({_id:req.params.id},{name:req.body.name, email:req.body.email,address:req.body.address,phone:req.body.phone})
 .then(function(done){
  res.redirect("/")
 })
})




















module.exports = router;
