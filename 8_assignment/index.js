var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routerExpress = express.Router();
var empRouter = require('./routes/employeeRoutes.js')(routerExpress);
var projectRouter = require('./routes/projectRoutes.js')(routerExpress);
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routerExpress);

const server = app.listen(3000, function() {
	console.log("Server is listening at port: " + 3000);
})