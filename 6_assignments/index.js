var express = require('express'),
	app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var https = require('https');
var makeRequest = require('./consumer.js')

var server = app .listen(3000, function() {
	console.log('Express server is listening at port: ' + 3000);
});

router.get('/clients', function(request, response) {
	makeRequest('GET', undefined, '/clients').then(function(data) {
		response.json(data);
	});
});

router.get('/clients/:id', function(request, response) {
	makeRequest('GET', undefined, '/clients/' + request.params.id, response)
	 .then(function(data) {
	 		response.json(data);
	 });
});

router.post('/clients', function(request, response) {
	makeRequest('POST', request.body, '/clients').then(function(data) {
		response.json(data);
	});
});

router.delete('/clients/:id', function(request, response) {
	makeRequest('DELETE', undefined, '/clients/' + request.params.id, response)
	 .then(function(data) {
	 		response.send(data);		
	 });
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);