var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	'username': String,
	'password': String,
	'token': String
});

var User = mongoose.model('Users', userSchema);
module.exports = User;