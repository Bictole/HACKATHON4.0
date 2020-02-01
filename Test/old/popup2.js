window.onload = function () {

    var videogame = document.getElementById("videogame");
    var music = document.getElementById("music");
    var sport = document.getElementById("sport");
    videogame.addEventListener("click", Wvideogame);
    music.addEventListener("click", Wmusic);
    sport.addEventListener("click", Wsport);

    function Wvideogame()
    {
        window.open("https://www.youtube.com/gaming","videogame");
    }
    function Wmusic() {
        window.open("https://music.youtube.com/","music");
    }
    function Wsport()
    {
        window.open("https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw","sport");
    }


}