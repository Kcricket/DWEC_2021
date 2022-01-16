function createAndFindEu(){
    for(i=0; i<8; i++){
        if(i%2==0){
            $("body").append($("<p></p>").text("Eu"))
        }else
        $("body").append($("<p></p>").text("Ue"))
    }    
}

$(document).ready(function(){
    createAndFindEu()
    $("p:contains('Eu')").css("background-color", "red")
})

