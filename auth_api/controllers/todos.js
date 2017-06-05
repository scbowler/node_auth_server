const Todo = require('../models/todo');

exports.addTodo = function(req, res, next){
    const title = req.body.title;
    const details = req.body.details;
    const userId = req.query.key;

    if(!userId){
        return res.status(422).send({success: false, error: 'You must include your API key in the query string'});
    } else if(userId.length < 7){
        return res.status(422).send({success: false, error: 'API key invalid'});
    }

    if(!title){
        return res.status(422).send({success: false, error: 'You must include a title for your to do item'});
    }

    if(!details){
        return res.status(422).send({success: false, error: 'You must include details for your to do item'});
    }

    const todo = new Todo({
        title: title,
        details: details,
        userId: userId
    });

    todo.preSave();

    todo.save(function(err){
        if(err) return res.status(422).send({success: false, error: 'Unable to add To-Do_Item'});

        res.status(201).json({
            success: true,
            msg: 'New To-Do-Item added'
        });
    });
};

exports.getTodos = function(req, res, next){
    const userId = req.query.key;

    if(!userId){
        return res.status(422).send({success: false, error: 'No user ID included with request'});
    }

    Todo.find({userId: userId}).sort({complete: 1}).sort({created: -1}).select('complete title').exec(function(err, todos){
        if(err) return res.status(422).send({success: false, error: 'Unable to fetch To-Do-List'});

        res.json({
            success: true,
            todos: todos
        });
    });
};

exports.getTodo = function(req, res, next){
    const userId = req.query.key;
    const todoId = req.params.todoId;

    if(!userId || !todoId){
        return res.status(422).send({success: false, error: 'Missing user ID and/or To-Do-Item ID'});
    }

    Todo.findOne({userId: userId}).where('_id').equals(todoId).exec(function(err, todo){
        if(err || !todo){ return res.status(422).send({success: false, error: 'Unable to retrieve To-Do-Item'})};

        return res.json({success: true, todo: todo});
    });
};

exports.completeTodo = function(req, res, next){
    const userId = req.query.key;
    const todoId = req.params.todoId;

    Todo.findOne({userId: userId}).where('_id').equals(todoId).exec(function(err, todo){
        if(err || !todo) return res.status(422).send({success: false, error: 'Unable to find To-Do-Item to update'});

        todo.toggleComplete();

        todo.save();

        res.json({success: true, todo: todo});
    });
};

exports.deleteTodo = function(req, res, next){
    const userId = req.query.key;
    const todoId = req.params.todoId;


    if(!userId){
        return res.status(422).send({success: false, error: 'No user ID included with request'});
    }

    if(!todoId){
        return res.status(422).send({success: false, error: 'No to do item ID included with request'});
    }

    Todo.findOne({userId: userId}).where('_id').equals(todoId).exec(function(err, todo){
        if(err || !todo) return res.status(422).send({success: false, error: 'No To-Do-Item found to delete'});


        todo.remove(function(err){
            if (err) return res.status(422).send({success: false, error: 'Server error, unable to delete To-Do-Item'});

            return res.json({success: true, msg: 'To-Do-Item Deleted'});
        });
    });
};
