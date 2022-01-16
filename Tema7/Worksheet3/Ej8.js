function createElem(){
    $("body").append("<div id='div1' style='width:80px;height:80px;display:none;background-color:red;'></div><br>")
    $("body").append("<div id='div2' style='width:80px;height:80px;display:none;background-color:blue;'></div><br>")
    $("body").append("<div id='div3' style='width:80px;height:80px;display:none;background-color:green;'></div><br>")
    $("body").append("<div id='div4' style='width:80px;height:80px;display:none;background-color:yellow;'></div><br>")
    $("body").append("<div id='div5' style='width:80px;height:80px;display:none;background-color:black;'></div><br>")
    $("body").prepend("<button id='btn'>Fade divs</button>")

}

$(document).ready(function(){
    createElem()
    $("#btn").click(function(){
          $("#div1:hidden").fadeIn(800);
          $("#div2").fadeIn("slow");
          $("#div3").fadeIn("fast");
          $("#div4").fadeIn(2000);
          $("#div5").fadeIn(4000);

    });
})