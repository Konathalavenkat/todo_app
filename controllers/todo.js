const Todo = require('../models/Todo');
const moment = require('moment');

const addnewTodo = async (req, res, next) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.desc,
    });
    await todo
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => next(error));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const homeController = async (req, res, next) => {
  try {
    // const todos = await Todo.find().sort({createdAt: -1});
    const todos = await Todo.find();
    res.locals.moment = moment;
    res.render("index", { title: "List Todo", todos: todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getnewTodo = (req, res, next) => {
  try {
    res.render("newtodo", { title: "Add Todo" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodoFrom = async (req, res, next) => {
  try {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    res.render("updatetodo", { title: "Edit Todo",todo:todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTodoForm = async (req,res,next)=>{
    try{
        const {id} = req.params;
        res.render('deletetodo',{title: "Delete Todo",id:id})
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const editTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {title,desc}= req.body;
        const todo = await Todo.findById(id);
        if(!todo) res.status(404).json({message: 'Todo Not Found'});
        todo.title = title;
        todo.description = desc;
        await todo.save();  
        res.redirect("/");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 
}

module.exports = { homeController, addnewTodo, getnewTodo, updateTodoFrom , deleteTodoForm, editTodo,deleteTodo};
