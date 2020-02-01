window.onload = function () {
    var res = " ";
    var quality = " ";
    


    var informations = document.getElementById("informations");
    var beach = document.getElementById("beach");
    var mountain = document.getElementById("mountain");
    var sport = document.getElementById("sport");
    var clothes = document.getElementById("clothes");
    var car = document.getElementById("car");
    var plane = document.getElementById("plane");
    var icecream = document.getElementById("icecream");

    var total = 0;
 


    shopping.addEventListener("click", Wshopping);
    video.addEventListener("click", Wvideo);
    informations.addEventListener("click", Winformations);
    beach.addEventListener("click", Wbeach);
    mountain.addEventListener("click", Wmountain);
    sport.addEventListener("click", Wsport);
    clothes.addEventListener("click", Wclothes);
    car.addEventListener("click", Wcar);
    plane.addEventListener("click", Wplane);
    icecream.addEventListener("click", Wicecream);

    function d(img) {

        img.disabled = true;


        if (total > 1) {
            img.checked = false;
        }

        // Load the model.
        total += 1;
        for (var i = 0; i < 3; i++) {
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
    function Wshopping()
    {
        res = d(shoppin);
        
    }
    function Wvideo() {

        res = d(video);
        }
    function Winformations()
    {
 
       
        res = d(informations);
    }
    function Wbeach()
    {
        res = d(beach);
    }
    function Wmountain()
    {
        res = d(mountain);
    }
    function Wsport()
    {
        res = d(sport);
    }
    function Wclothes()
    {
        res = d(clothes);
    }
    function Wcar()
    {
        res = d(car);
    }
    function Wplane()
    {
        res = d(plane);
    }
    function Wicecream()
    {
        res = d(icecream);
    }
  
}