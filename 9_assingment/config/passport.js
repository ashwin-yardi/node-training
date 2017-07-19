var bearerStrategy = require('passport-http-bearer').Strategy;
var userModel = require('../models/userModel.js');

module.exports = function(passport) {
	passport.use('bearerStrategy', new bearerStrategy(function(token, done) {
		userModel.findOne({ 'token': token }, function(err, doc) {
			if(err) { return done(err); }
			if(!doc) { return done(null, false); }
			return done(null, doc);
		});
	}));
}