const passport = require("passport");
const passportJWT = require("passport-jwt");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const modelPedido = require('../models/pedido');
const modelProduto = require('../models/produto');
const modelUsuario = require('../models/usuario');


passport.use('jwt-dev-evolution', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jwt-dev-evolution'
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