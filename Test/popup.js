window.onload = function () {


    var txt = document.getElementById("txt");

    var cow = document.getElementById("cow");
    var mutton = document.getElementById("mutton");
    var chicken = document.getElementById("chicken");
    cow.addEventListener("click", Wcow);
    mutton.addEventListener("click", Wmutton);
    chicken.addEventListener("click", Wchicken);
    function Wcow()
    {
        txt.value += "+ cow ";
    }
    function Wmutton() {
        txt.value += "+ mutton ";
    }
    function Wchicken()
    {
        txt.value += "+ chicken ";
    }


}