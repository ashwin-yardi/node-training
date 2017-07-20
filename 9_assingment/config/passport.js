var bearerStrategy = require('passport-http-bearer').Strategy;
var userModel = require('../models/userModel.js');
var admin = require('./admin.js');

module.exports = function(passport) {
	passport.use('bearerStrategy', new bearerStrategy(function(token, done) {
		userModel.findOne({ 'token': token }, function(err, doc) {
			if (err) { return done(err); }
			if (!doc) { return done(null, false); }
			return done(null, doc);
		});
	}));

	passport.use('adminBearer', new bearerStrategy(function(token, done){
		if (admin.token == token) {
			return done(null, admin);
		}
		return done(null, false);
	}));
}