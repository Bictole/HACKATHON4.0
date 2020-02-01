
var http = require("http");

var make_request = function(word) {
var options = {
  method: 'GET',
  url: 'https://api.wordassociations.net/association/v1.0/json/search?',
  qs: {
    type: 'stimulus',
    indent: 'yes',
    pos: 'noun',
    limit: '50',
    lang: 'en',
    text: 'Light',
    apikey: '4b8acd47-07b3-4d38-ab4d-2480c73669e9'
  },

};

var request = http.request(options, function (response) {
	response.on('data', function(data) {
        console.log(data)});

});


request.write(message);
    request.end();
}
