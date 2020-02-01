window.onload = function () {
    var total=0;
    var form1 =document.getElementById("form1");
    for(var i=0; i < form1.ckb.length; i++){
        if(document.form1.ckb[i].checked){
            total =total +1;}
        if(total > 3){
            for (var i = 0; i <form1.ckb.length ;i++) {
                document.form1.ckb.checked = false;
            }
        }
    }
} 
