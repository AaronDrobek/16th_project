const express = require("express");
const router = express.Router();


const task = ["wash the car", "vacuum the carpet", "pack the kids' lunches", "go grocery shopping", "tune up the hemi",  "jack-hammer side walk", "have five daiquiri's"];
const complete = ["build a dynamic list maker"];

router.use("/public", express.static("public"));

router.get("/", function(req, res){
res.render('main', {task: task, complete: complete});
});

router.post("/", function(req, res){
  task.push(req.body.todo_input);
  console.log(task);
  res.redirect("/");
})

router.post("/complete", function(req, res){
  complete.push(task.splice(task.indexOf(req.body.click_done),1));
  res.redirect("/");
})


















module.exports=router;
