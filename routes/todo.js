const express = require('express');
const router = express.Router();

const controllers = require('../controllers/todo');

router.post('/new', controllers.addnewTodo); 

router.get('/', controllers.homeController)

router.get('/new', controllers.getnewTodo); 

router.get('/update/:id', controllers.updateTodoFrom)

router.get('/delete/:id', controllers.deleteTodoForm); 

router.post('/edit/:id', controllers.editTodo);

router.get('/delete-todo/:id', controllers.deleteTodo)
module.exports = router;