const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    title: String,
    details: String,
    complete: Boolean,
    completed: String,
    created: String,
    userId: String
});

todoSchema.pre('save', function(next){

    this.created = new Date().getTime();
    this.complete = false;
    this.completed = null;

    next();
});

todoSchema.methods.completeTodo = function(){
    this.complete = true;
    this.completed = new Date().getTime();
};

const ModelClass = mongoose.model('todo', todoSchema);

module.exports = ModelClass;
