var Employee = require('../models/employeeModel.js');

exports.createEmployees = function(request, response) {
	let objectToBeInserted = request.body;
	Employee.find({id: objectToBeInserted.reportingTo}, '_id', function(err, doc) {
		objectToBeInserted.reportingTo = doc[0]._id;
		var tempEmp = new Employee(objectToBeInserted);
		tempEmp.save(function(err, tempEmp) {
			if (err) {
				return console.log("Error: \n" + err);
			}
			console.log("Document Saved");
			response.send("Created Successfully!");
		});
	});
}

exports.indexEmployeeById = function(request, response) {
	Employee.findOne({ 'id': request.params.id }, function(err,doc) {
		if (err) {
			return console.log("Error:" + err);
		}
		response.json(doc);
	});
}

exports.indexEmployees = function(request, response) {
 	Employee.find((err, employeesDocs) => {
		if (err) {
			return console.log("Error: " + err);
		}
		console.log("Documents retrieved");
		response.json(employeesDocs);
	});			
}

exports.deleteEmployees = function(request, response) {
	Employee.remove({'id': request.body.id}, function(err) {
		if (err) { return console.log("Error: " + err); }
		response.send("Employee entry successfully removed!");
	});
}

exports.updateEmployees = function(request, response) {
	let bodyToBeUpdated = request.body;
	let id = request.body.id; 
	delete bodyToBeUpdated.id;
	Employee.findOne({ 'id': bodyToBeUpdated.reportingTo }, '_id', function(err, doc) {
		if (!err) {
			var reportingToId = doc._id;
			bodyToBeUpdated.reportingTo = reportingToId;
			Employee.findOne({ 'id': id }, function(err, doc) {
				doc.name = bodyToBeUpdated.name;
				doc.reportingTo = bodyToBeUpdated.reportingTo;
				doc.save();
				response.send("Updated Successfully!");
			});
		}
	});
}