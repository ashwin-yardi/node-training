var employeeController = require('../controllers/employeeController.js');
var router = require('express').Router();

module.exports = function(passport) {
	router.use(passport.authenticate('bearerStrategy', { session: false }));

	router
		.post('/employees', employeeController.createEmployees)
		.get('/employees', employeeController.indexEmployees)
		.get('/employees/:id', employeeController.indexEmployeeById)
		.delete('/employees', employeeController.deleteEmployees)
		.put('/employees', employeeController.updateEmployees);

	return router;	
}