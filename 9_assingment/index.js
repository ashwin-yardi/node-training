var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

require('./config/passport.js')(passport);

var empRouter = require('./routes/employeeRoutes.js')(passport);
var projectRouter = require('./routes/projectRoutes.js')(passport);
var userRouter = require('./routes/userRoutes.js')(passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', userRouter);
app.use('/', empRouter);
app.use('/', projectRouter);

const server = app.listen(3000, function() {
	console.log("Server is listening at port: " + 3000);
});