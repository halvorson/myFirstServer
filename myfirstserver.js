// import http
var http = require("http");
var PORT = 8080;
var goodPORT = 7000;
var badPORT = 7500;

var goodServer = http.createServer(goodNews);
var badServer = http.createServer(badNews);

function goodNews(req, res) {
	res.end("You're beautiful!");
}

function badNews(req, res) {
	res.end("You're ugly!");
}

function handleRequest(request, response) {

	// send response
	response.end("it work! the path hit: " + request.url);
}

// var server = http.createServer(handleRequest);

// server.listen(PORT, function() {
// 	console.log("Server listening on: https://localhost:%s", PORT);
// });

goodServer.listen(goodPORT, function() {
	console.log("Good news available at https://localhost:%s", goodPORT);
});
badServer.listen(badPORT, function() {
	console.log("Bad news available at https://localhost:%s", badPORT);
});