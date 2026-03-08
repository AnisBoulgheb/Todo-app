const express =require("express");
const moment = require("moment")
const Todo = require("../models/Todo")
const router =express.Router();
const todo = require("../controllers/todo")



router.get("/",todo.homeController);

router.get("/newTodo",todo.addTodoFormController );

router.get("/updateTodo",todo.updateTodoFormController );

router.get("/deleteTodo",todo.deleteTodoFormController );

router.post("/newTodo",todo.addTodoController );

router.post("/updateTodo/:id",todo.updateTodoController);

router.get("/confirmDelete", todo.deleteTodoController)

module.exports = router;
