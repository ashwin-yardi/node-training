var userController = require('../controllers/userController.js');
var userRouter = require('express').Router();
module.exports = function() {
	userRouter
		.post('/signup', userController.signUp)
		.get('/users', userController.listUser);
	return 	userRouter;
}