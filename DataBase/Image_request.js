
{
    function make_request(word){
        var request = new XMLHttpRequest();
        request.open("GET", "https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures");
        request.send();
        }
    }
     