function createElem(){
    $("body").append("<input type='password' name='' id='in1'>")
    $("body").append("<p id='p'>Hola amigo</p>")
}


$(document).ready(function(){
    createElem();
    // console.log($("#in1").text())
    $("input").keyup(function(e){
        console.log("hola "+$("#in1").val().length)
        var inp = $("#in1").val()
        var par = $("#p")   
        if(inp.length < 5){
            par.html("Muy corta (Poco Seguro)")
        }else if(inp.length >= 5 && $(this).val().lenght <8){
            par.html("Meh (Medianamente segura)")
        }else if(inp.length >=8){
            par.html("Nice (Segura)")
        }
    })
})