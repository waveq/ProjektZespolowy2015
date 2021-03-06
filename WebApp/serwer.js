'use strict';

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var port = 80;

app.use(bodyParser.urlencoded({
	'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));

app.listen(port);
console.log("app listen on port " + port);


app.get('*', function(req, res) {
	console.log("test");
	res.sendfile("./app/index.html");
});

