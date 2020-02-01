




var settings = {
	"url": "https://api.wordassociations.net/associations/v1.0/json/search?",
	"method": "GET",
    "apikey": "4b8acd47-07b3-4d38-ab4d-2480c73669e9",
    "text": "word",
    "lang": "en",
    "pos": "noun",
	}

ajax(settings).done(function (response) {
	console.log(response);
});