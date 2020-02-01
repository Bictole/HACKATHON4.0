{
function made_request(word){
    var unirest = require("unirest");
    var url = "https://api.wordassociations.net/associations/v1.0/json/search?apikey=4b8acd47-07b3-4d38-ab4d-2480c73669e9"
    var a = url.concat("&type=stimulus&indent=yes&pos=noun&limit=50&lang=en&text=");
    querystring = {"apikey":"4b8acd47-07b3-4d38-ab4d-2480c73669e9","type":"stimulus","indent":"yes","pos":"noun","limit":"50","lang":"en","text":word};
    unirest.get(a.concat(word),params=querystring).header("apikey","4b8acd47-07b3-4d38-ab4d-2480c73669e9").end(function (result) {
        console.log(result.raw_body);  
    
    
    const L = JSON.parse(result.raw_body);
            
    });

}

made_request("bird");

function linked_list(w1,w2){
    var L = []
    var K = []
    var out = []
    for(i=0; i<length(L); i++){
        for(j=0; j<length(K);j++){
            if(L[i]==K[j]){
                out.push(L[i]);
            }
        }
    }
}

}   
