var userController = require('../controllers/userController.js');
var userRouter = require('express').Router();

module.exports = function(passport) {
	userRouter.use(passport.authenticate('adminBearer', { session: false }));
	userRouter
		.post('/signup', userController.signUp)
		.get('/users', userController.listUser);

	return 	userRouter;
}