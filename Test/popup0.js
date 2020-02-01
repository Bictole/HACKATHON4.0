window.onload = function () {
    var res = " ";
    var quality = " ";
    var shopping = document.getElementById("shopping");
    var video = document.getElementById("video");
    var info = document.getElementById("informations");
    if(shopping){shopping.addEventListener("click", Wshopping);}
    if(video){video.addEventListener("click", Wvideo);}
    if(info){info.addEventListener("click", Winfo);}

    function d(img){
     // Load the model.
        mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
      document.getElementById(im) = predictions;  
    });
  });
        
    }
    function Wshopping()
    {
        res = d(shopping);

    }
    function Wvideo() {

        res = d(video);
        }
    function Winfo()
    {
        
        quality = info;
        res = d(quality);
    }
    // Test
    return res;
}