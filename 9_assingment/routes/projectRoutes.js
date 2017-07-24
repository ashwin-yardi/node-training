var projectController = require('../controllers/projectController.js');
var router = require('express').Router();

module.exports = function(passport) {
	router.use(passport.authenticate('bearerStrategy', { session: false }));

	router
		.get('/projects', projectController.indexProjects)
		.get('/projects/:id', projectController.indexProjectById)
		.post('/projects', projectController.createProject)
		.delete('/projects', projectController.deleteProject)
		.put('/projects', projectController.updateProject);
		
	return router;	
}