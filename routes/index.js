const express = require("express");
const router = express.Router();
const models = require("../models/index");





router.get("/", function(req,res){
  models.Task.findAll()
  .then(function(data) {
    console.log(data,"data here");
    res.render("task", {task: data});
  })
});

router.post("/task", function(req,res){
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

router.get("/complete/:id", function (req,res){
  models.Task.update({
    isComplete: true,
  },
  {
    where:{
      id: req.params.id
    }
  })
  .then(function(data){
    res.redirect("/");
  })
})

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

router.get("/edit/:id", function(req,res){
  models.Task.findById(req.params.id)
    .then(function(data){
      res.render("edit", {task:data})

    })
})


//
// router.post("/complete/:id", function(req, res){
//   models.Task.findOne()
//   console.log(task);
//   res.render("/", {complete: data});
// })

// router.post("/complete", function(req, res){
//   complete.push(task.splice(task.indexOf(req.body.click_done),1));
//   res.redirect("/");
// })
module.exports=router;
