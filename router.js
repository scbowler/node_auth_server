const Authentication = require('./controllers/authentication');
const Todos = require('./controllers/todos');
const passportService = require('./services/passport');
const passport = require('passport');
const path = require('path');

const requireAuth = passport.authenticate('jwt', { session: false} );
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
    app.get('/api/', requireAuth, function(req, res){
        res.send({ message: 'Here is the secret information you requested: The egg came first.' });
    });
    app.post('/api/signin', requireSignin, Authentication.signin);
    app.post('/api/signup', Authentication.signup);

    app.get('/api/todos', Todos.getTodos);
    app.get('/api/todos/:todoId', Todos.getTodo);
    app.post('/api/todos', Todos.addTodo);
    app.put('/api/todos/:todoId', Todos.completeTodo);
    app.delete('/api/todos/:todoId', Todos.deleteTodo);

    app.get('*', function(req, res){
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
};
