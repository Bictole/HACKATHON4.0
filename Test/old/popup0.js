window.onload = function () {

    var shopping = document.getElementById("shoppin");
    var video = document.getElementById("video");
    var info = document.getElementById("informations");
    shopping.addEventListener("click", Wshopping);
    video.addEventListener("click", Wvideo);
    info.addEventListener("click", Winfo);

    function Wshopping()
    {
        
        window.open("shop.html","Shopping");
    }
    function Wvideo() {

        window.open("video.html","Video");
    }
    function Winfo()
    {
        window.open("info.html","Informations");
    }


}