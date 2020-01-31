window.onload = function () {


    var txt = document.getElementById("txt");

    var cow = document.getElementById("vv");
    
    cow.addEventListener("click", Wcow);
    var trie = document.getElementById("trie");
    
    trie.addEventListener("click", tri);
    
    function Wcow()
    {
        txt.value += " vv ";

    }
   
   function tri(){
   		var research = "www.google.com/" + txt.value;
   		
   		return research;
   }
}