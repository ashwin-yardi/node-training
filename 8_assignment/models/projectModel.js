var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	id: Number,
	name: String,
	description: String,
	manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
	developers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

var projectModel = mongoose.model('Projects', projectSchema);
module.exports = projectModel;