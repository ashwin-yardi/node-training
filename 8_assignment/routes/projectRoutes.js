var projectController = require('../controllers/projectController.js')
module.exports = function(router) {
	router
		.get('/projects', projectController.indexProjects)
		.get('/projects/:id', projectController.indexProjectById)
		.post('/projects', projectController.createProject)
		.delete('/projects', projectController.deleteProject)
		.put('/projects', projectController.updateProject)
}