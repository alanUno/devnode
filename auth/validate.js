const passport = require("passport");
const passportJWT = require("passport-jwt");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const modelUsuario = require('../models/pedido');

passport.use('jwt-dev-evolution', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'senhasecreta'
}, (payload, done) => {

    console.log(payload)

    return modelUsuario.findOne({_id: payload.sub})
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            return done(err);
        });

}));

module.exports = passport;