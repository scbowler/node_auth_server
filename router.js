const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false} );
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
    app.get('/api/', requireAuth, function(req, res){
        res.send({ message: 'Here is the secret information you requested: The egg came first.' });
    });
    app.post('/api/signin', requireSignin, Authentication.signin);
    app.post('/api/signup', Authentication.signup);
};
