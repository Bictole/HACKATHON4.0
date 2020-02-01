import {google_images_download} from 'google_images_download';
import * as sys from 'sys';
function GoogleImage_requests(word) {
    var arguments, content, f, orig_stdout, paths, response, urls;
    orig_stdout = sys.stdout;
    f = open("URLS.txt", "w");
    sys.stdout = f;
    response = google_images_download.googleimagesdownload();
    arguments = {"keywords": word, "limit": 1, "print_urls": true, "size": ">2MP"};
    paths = response.download(arguments);
    sys.stdout = orig_stdout;
    f.close();
    f = open("URLS.txt", "r");
    content = f.readlines();
    f.close();
    urls = [];
    for (var j = 0, _pj_a = content.length; (j < _pj_a); j += 1) {
        if ((content[j].slice(0, 9) === "Completed")) {
            urls.append(content[(j - 1)].slice(11, (- 1)));
        }
    }
    console.log(urls);
    return urls;
}
new GoogleImage_requests("beer");
console.log("Heho");

//# sourceMappingURL=GoogleImage_Requests.js.map
