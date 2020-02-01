
var http = require("https");
var word = "night";

var options = {
    "method": "GET",
    "port": null,
    "host": "https://api.wordassociations.net/association/v1.0/json/search?",
    "text": word,
    "lang": "en",
    "type": "stimulus",
    "limit": "50",
    "pos": "noun",
	"indent": "yes",
	"path": "https://api.wordassociations.net/association/v1.0/json/search?",
    "headers": {"apikey": "4b8acd47-07b3-4d38-ab4d-2480c73669e9"}
    

	
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
 