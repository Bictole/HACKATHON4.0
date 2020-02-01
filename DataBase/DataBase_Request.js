{
function make_request(word){
    var unirest = require("unirest");
    var url = "https://api.wordassociations.net/associations/v1.0/json/search?apikey=4b8acd47-07b3-4d38-ab4d-2480c73669e9"
    var a = url.concat("&type=stimulus&indent=yes&pos=noun&limit=50&lang=en&text=");
    querystring = {"apikey":"4b8acd47-07b3-4d38-ab4d-2480c73669e9","type":"stimulus","indent":"yes","pos":"noun","limit":"50","lang":"en","text":word};
    unirest.get(a.concat(word),params=querystring).header("apikey","4b8acd47-07b3-4d38-ab4d-2480c73669e9").end(function (result) {
           
    
    var l = new Array();
    var k = parser_json(result.raw_body);
    var res = l.concat(k);
    
    return res;
    });
}
}     
    
function parser_json(path){
    var a=0;
    var l = new Array();
    for(i=0; i<path.length;i++){
        
        if(path[i] == 'i' && path[i+1] == 't' && path[i+2] == 'e' && path[i+3] == 'm' && path[i+4] != 's'){
            i += 8;
            var s = " ";
            
            while(path[i+1] != ','){
                
                s = s.concat(path[i]);
                i += 1;
                
            }
            l.push(s);
            a+=1;
        }
    }

    return l;
}



function linked_list(w1,w2){
    var a = new Array();
    var L = a.concat(make_request(w1));
   
    var b = new Array();
    var K = b.concat(make_request(w2));

    var out = [];

    for(i=0; i<L.length; i++){
        for(j=0; j<K.length;j++){
            if(L[i]==K[j]){
                out.push(L[i]);
            }
        }
    }
    for(i=0;i<out.length;i++){
        console.log(out[i]);
    }
    return out;
}

linked_list("bread","jam");


