//define AuthRoute

var express = require("express");
var passport = require("passport");
var WcaStrategy = require("passport-wca");
var router = express.Router();
var config = require("../config");

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new WcaStrategy(config,
    function (accessToken, refreshToken, profile, done) {
        //Need to handle user profile here
        done(null, profile);
    }
));

router.get('/auth/wca',
    passport.authenticate('wca')
);

router.get('/auth/wca/callback', 
    passport.authenticate('wca', {failureRedirect: '/'}),
    function(req, res){
        res.send(req.session);
    }
)
