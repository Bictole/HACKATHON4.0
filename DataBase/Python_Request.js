'use strict';

var _requests = require('requests');

var requests = _interopRequireWildcard(_requests);

var _json = require('json');

var json = _interopRequireWildcard(_json);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
Created on Sat Feb  1 10:06:32 2020

@author: morin*/
function made_request(word) {
    var K, L, out, querystring, r, url;
    url = "https://api.wordassociations.net/associations/v1.0/json/search?";
    querystring = { "apikey": "4b8acd47-07b3-4d38-ab4d-2480c73669e9", "type": "stimulus", "indent": "yes", "pos": "noun", "limit": "50", "lang": "en", "text": word };
    r = requests.get(url, { "params": querystring });
    L = json.loads(r.text);
    K = L["response"];
    K = K[0];
    K = K["items"];
    out = [];
    for (var i, _pj_c = 0, _pj_a = K, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        i = _pj_a[_pj_c];
        out.append(i["item"]);
    }
    return out;
}
function main(w1, w2) {
    var K, L;
    L = made_request(w1);
    K = made_request(w2);
    for (var i, _pj_c = 0, _pj_a = L, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        i = _pj_a[_pj_c];
        for (var j, _pj_f = 0, _pj_d = K, _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
            j = _pj_d[_pj_f];
            if (i === j) {
                return i;
            }
        }
    }
    return 0;
}
function main_list(w1, w2) {
    var K, L, out;
    L = made_request(w1);
    K = made_request(w2);
    out = [];
    for (var i, _pj_c = 0, _pj_a = L, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        i = _pj_a[_pj_c];
        for (var j, _pj_f = 0, _pj_d = K, _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
            j = _pj_d[_pj_f];
            if (i === j) {
                out.append(i);
            }
        }
    }
    return out;
}
//# sourceMappingURL=Python_Request.js.map
