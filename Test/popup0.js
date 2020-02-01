window.onload = function () {
    var res = " ";
    var shopping = document.getElementById("shoppin");
    var video = document.getElementById("video");
    var info = document.getElementById("informations");
    shopping.addEventListener("click", Wshopping);
    video.addEventListener("click", Wvideo);
    info.addEventListener("click", Winfo);

    function Wshopping()
    {
        res = function(shoppin);
        
    }
    function Wvideo() {

        res = function(video);
        }
    function Winfo()
    {
        res = function(info);
    }

    function(img){
     // Load the model.
    
        mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
        console.log('Predictions: ');
        console.log(predictions);
            });
        return predictions;
         });
    }
    return res;
}