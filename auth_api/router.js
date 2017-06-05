const Authentication = require('./controllers/authentication');
const Todos = require('./controllers/todos');
const passportService = require('./services/passport');
const passport = require('passport');
const path = require('path');

const requireAuth = passport.authenticate('jwt', { session: false} );
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
    app.get('/', requireAuth, function(req, res){
        res.send({ message: 'Here is the secret information you requested: The egg came first.' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

    app.get('/todos', Todos.getTodos);
    app.get('/todos/:todoId', Todos.getTodo);
    app.post('/todos', Todos.addTodo);
    app.put('/todos/:todoId', Todos.completeTodo);
    app.delete('/todos/:todoId', Todos.deleteTodo);

    app.get('*', function(req, res){
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
};
