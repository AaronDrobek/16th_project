const express = require("express");
const router = express.Router();
const models = require("../models/index");




router.use("/public", express.static("public"));

// router.get("/", function(req, res){
// res.render('main', {task: task, complete: complete});
// });
router.get("/", function(req,res){
  models.Task.findAll()
  .then(function(data) {
    console.log(data,"data here");
    res.render("main", {task: data});
  })
});


router.post("/", function(req,res){
  models.Task.create({
    todo_input: req.body.todo_input
  })
  .then(function(data) {
    res.redirect("/");
  })
});
router.get("/destroy/:id", function(req,res){
  models.Task.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect("/");
  })
});

router.post("/edit/:id", function(req,res){
  models.Task.update({
    todo_input: req.body.todo_input,
  },{
    where:{
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect("/");
  })
});

//
// router.post("/complete/:id", function(req, res){
//   models.Task.findOne()
//   console.log(task);
//   res.render("/below", {task: data});
// })
//
// router.post("/complete", function(req, res){
//   complete.push(task.splice(task.indexOf(req.body.click_done),1));
//   res.redirect("/");
// })


















module.exports=router;
