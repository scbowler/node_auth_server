const Todo = require('../models/todo');

exports.addTodo = function(req, res, next){
    const title = req.body.title;
    const details = req.body.details;
    const userId = req.query.key;

    if(!userId){
        return res.status(422).send({error: 'You must include your API key in the query string'});
    } else if(userId.length < 7){
        return res.status(422).send({error: 'API key invalid'});
    }

    if(!title){
        return res.status(422).send({error: 'You must include a title for your to do item'});
    }

    if(!details){
        return res.status(422).send({error: 'You must include details for your to do item'});
    }

    const todo = new Todo({
        title: title,
        details: details,
        userId: userId
    });

    todo.save(function(err){
        if(err){ return next(err); }

        res.json({
            success: true,
            msg: 'New to do item added'
        });
    });
};

exports.getTodos = function(req, res, next){
    const userId = req.query.key;

    Todo.find({userId: userId}).exec(function(err, todos){
        if(err) throw err;

        res.json({
            success: true,
            todos: todos
        });
    });
};
