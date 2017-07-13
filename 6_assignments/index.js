var express = require('express'),
	app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var server = app .listen(3000, function() {
	console.log('Express server is listening at port: ' + 3000);
});

router.get('/clients', function(request, response) {
	response.json({Message: "Hooray!!"});
});

router.post('/signin', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;

	response.json({Message: "MC"});
	response.end();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);