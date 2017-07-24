var projectModel = require('../models/projectModel.js');

exports.indexProjects = function(request, response) {
	projectModel.find((err, docs) => {
		if (err){
			return console.log('Error: ' + err);	
		}
		console.log("Documents Retrieved!");
		response.json(docs);
	});
}

exports.indexProjectById = function(request, response) {
	projectModel.find({ 'id': request.params.id }, function(err, doc) {
		if (err) {
			return console.log("Error: " + err);
		}
		response.json(doc);
	});
}

exports.createProject = function(request, response) {
	var tempPorject = new projectModel(request.body);
	tempPorject.save(function(err) {
		if (err) {
			return console.log("Error: " + err);
		}
		response.send('Created Successfully!')
	});
}

exports.deleteProject = function(request, response) {
	projectModel.remove({ 'id': request.body.id }, function(err) {
		if (err) {
			return console.log('Error: ' + err);
		}
		response.send('Deleted Successfully!');
	});
}

exports.updateProject = function(request, response) {
	projectModel.findOne({ 'id' : request.body.id }, function(err, doc) {
		if (err) {
			return console.log("Error: " + err);
		}
		for (obj in request.body) {
			doc[obj] = request.body[obj];
		}
		doc.save();
		response.send("Successfully Updated!");
	});
} 