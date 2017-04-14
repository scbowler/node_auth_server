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

todoSchema.methods.preSave = function(){

    this.created = new Date().getTime();
    this.complete = false;
    this.completed = null;
};

todoSchema.methods.toggleComplete = function(){

    if(this.complete){
        this.complete = false;
        this.completed = null;

        return;
    }

    this.complete = true;
    this.completed = new Date().getTime();
};

const ModelClass = mongoose.model('todo', todoSchema);

module.exports = ModelClass;
