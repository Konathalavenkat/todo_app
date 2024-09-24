const mongoose = require('mongoose');

const todoSchema =  mongoose.Schema({title : {type:String,required:true,unique:true,maxlength:20,minlength:3,trim:true}, description: {type:String,required:true,trim:true}},{timestamps:true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;