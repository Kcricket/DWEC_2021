var slideIndex = 1;
var totalIndex = 3;

window.onload = () => {
    cambiaImg()
    showSlides(slideIndex);
    
}


function cambiaImg(){
    var mc = new Hammer(document.querySelector('img'));
    mc.on('panleft', plusSlides(-1));
    mc.on('panright', plusSlides(1));
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    slideIndex  =n
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    n = slideIndex

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
        
    }
    //Keep in mind thay the index of dots starts on 0 and finishes on 2
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    dots[slideIndex-1].style.width = '50px';
    dots[slideIndex-1].style.height = '50px';
    //Alante y atras
    if(n==1){
        dots[slideIndex+1].style.width = '15px';
        dots[slideIndex+1].style.height = '15px';
        dots[slideIndex].style.width = '15px';
        dots[slideIndex].style.height = '15px';
        
    }else if(n==2){
        dots[slideIndex].style.width = '15px';
        dots[slideIndex].style.height = '15px';
        dots[slideIndex-2].style.width = '15px';
        dots[slideIndex-2].style.height = '15px';
    }else if(n == 3){
        //Si estamos en el final:
        dots[slideIndex-2].style.width = '15px';
        dots[slideIndex-2].style.height = '15px';
        dots[slideIndex-3].style.width = '15px';
        dots[slideIndex-3].style.height = '15px';

    }

}
function trataOrientacion(e){
    
}

function trataAceleracion(e){
    //Si la aceleracion es 0
    if (e.acceleration[0]!=0)
    plusSlides(1)
}