var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
	id: Number,
	name: String,
	reportingTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employees'}   
});

var Employee = mongoose.model('Employees', employeeSchema);
module.exports = Employee;