var userModel = require('../models/userModel.js');

exports.signIn = function(request, response) {

}

exports.listUser = function(request, response) {
	userModel.find((err, docs) => {
		if(err) { return console.log('Error: ' + err); }
		response.json(docs);
	}); 
}
exports.signUp = function(request, response) {
	let objectToBeInserted = request.body;
	objectToBeInserted.token = objectToBeInserted.username + "12345";
	let tempUser = new userModel(objectToBeInserted);
	tempUser.save(function(err) {
		if(err) {return console.log("Error: " + err); }
		response.send("User Created Successfully");
	});
}