window.onload = function () {

    var videogame = document.getElementById("videogame");
    var video = document.getElementById("video");
    var cloth = document.getElementById("cloth");
    var sport = document.getElementById("sport");
    var music = document.getElementById("music");
    var grocery = document.getElementById("grocery");
    var technology = document.getElementById("technology");
    videogame.addEventListener("click", Wvideogame);
    video.addEventListener("click", Wvideo);
    cloth.addEventListener("click", Wcloth);
    sport.addEventListener("click", Wsport);
    music.addEventListener("click", Wmusic);
    grocery.addEventListener("click", Wgrocery);
    technology.addEventListener("click", Wtechnology);

    function Wvideogame()
    {
        window.open("https://www.amazon.fr/jeux-video-consoles-portables-accessoires-pc/b?node=530490","videogame");
    }
    function Wvideo() {
        window.open("https://play.google.com/store/movies?hl=fr","Video");
    }
    function Wcloth()
    {
        window.open("https://www.boohoo.com/","Cloth");
    }
    function Wsport()
    {
        window.open("https://www.sportscoshop.com/","Sport");
    }
    function Wmusic() {
        window.open("https://www.musicstore.com/fr_FR/EUR?campaign=bing/FR&ProgramUUID=LnrAqJarSyEAAAFlPfd58M3p&msclkid=cda0f553071b159d430cab677101f655","Music");
    }
    function Wgrocery()
    {
        window.open("https://grocery.walmart.com/","groceryr");
    }
    function Wtechnology()
    {
        window.open("https://www.amazon.com/s?k=technology&ref=nb_sb_noss","Technology");
    }


}