window.onload = function () {

    var shopping = document.getElementById("shopping");
    var video = document.getElementById("video");
    var info = document.getElementById("informations");
    shopping.addEventListener("click", Wshopping);
    video.addEventListener("click", Wvideo);
    info.addEventListener("click", Winfo);

    function Wshopping()
    {
        window.open("https://www.theoryofknowledge.net/areas-of-knowledge/history/","Shopping");
    }
    function Wvideo() {
        window.open("https://study.com/academy/lesson/history-of-personality-psychology.html","Video");
    }
    function Winfo()
    {
        window.open("index.html","Informations");
    }


}