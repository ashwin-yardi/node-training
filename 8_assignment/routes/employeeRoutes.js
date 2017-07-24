var employeeController = require('../controllers/employeeController.js');

module.exports = function(router) {
	router
		.post('/employees', employeeController.createEmployees)
		.get('/employees', employeeController.indexEmployees)
		.get('/employees/:id', employeeController.indexEmployeeById)
		.delete('/employees', employeeController.deleteEmployees)
		.put('/employees', employeeController.updateEmployees)
}