var https = require('https');

module.exports = function (methodType, postdata, pathParam) {
	return new Promise(function(resolve, reject) {
		let post_options = {
			host: "api.createsend.com",
			port: 443,
			path: '/api/v3.1' + pathParam + '.json',
			method: methodType, 
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + new Buffer('fc96dc9ded698bbfbfb975409a864a42:x').toString('base64')
			}    		
		};
		console.log(JSON.stringify(post_options));

		var req = https.request(post_options, (res) => {
			console.log( methodType + " successfull!");
			console.log("STATUS: " + res.statusCode);
			if (methodType == 'DELETE') {
				return resolve("Client Deleted successfully. Status Code: " + res.statusCode);
			}
			res.on('data', (d) => {
				let responseData = JSON.parse(d);
				return resolve(responseData);
			});
		});
		req.on('error', function(err) {
			return reject(err);
		})
		if (methodType == 'POST') {
			req.write(JSON.stringify(postdata));
		} 
		req.end();
	});
}