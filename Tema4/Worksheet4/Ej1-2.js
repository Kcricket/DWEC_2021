window.onload = () => {
    wapo = document.querySelector("#wapo")
    wapo.preventDefault 
    // The version 1----------------------------
    //wapo.addEventListener('click', trunWapeton)
    //The version2 ------------------------------
    wapo.addEventListener('click', trunWapetonStylesheet)
    //trunWapeton();
    document.querySelector('#btnUpFonts').addEventListener('click', increaseFont)
    document.querySelector('#btnDownFonts').addEventListener('click', decreaseFont)
    document.querySelector('#btnJust').addEventListener('click', justifyText)
    document.querySelector('#btnAlign').addEventListener('click', alignText)

}
//Ej 1 pt 1
function trunWapeton(){
    //e.preventDefault;
    //Bigest
    document.querySelector('#container').backgroundColor= "#B983FF"
    //Main 
    main = document.querySelector("#main")
    main.className  = "jumbotron"
    //Footer
    footer = document.getElementById('divfooter')
    footer.className = "alert alert-danger"
    footer.style.backgroundColor = "#99FEFF";
    //Upper div
    divhrefs = document.querySelector("#divhrefs")
    divhrefs.style.backgroundColor = "#94B3FD"
    divhrefs.style.border = "1px black"
}
//Ej 1 pt 2
function trunWapetonStylesheet(){
    document.querySelector("#stylesheetX").href = 'Styles.css'
}
function increaseFont() {
    var pargraphs = document.querySelectorAll('p');
    pargraphs.forEach(element => {
        //var id = element.id
        var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize+= 5;
        currentSize.toString
        //The solution to a large time problem was this notation ``
        element.style.fontSize = `${currentSize}px`
    });
    
}
function decreaseFont() {
    var pargraphs = document.querySelectorAll('p');
    pargraphs.forEach(element => {
        //var id = element.id
        var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize-= 5;
        currentSize.toString
        //The solution to a large time problem was this notation ``
        element.style.fontSize = `${currentSize}px`
    });
    
}
//Ej 2 pt 1
function justifyText(){
    div = document.querySelector("#divcontent")
    div.style.textAlign = 'justify'
}
//Ej 2 pt 2
function alignText(){
    div = document.querySelector("#divcontent")
    div.style.textAlign = 'left'
}