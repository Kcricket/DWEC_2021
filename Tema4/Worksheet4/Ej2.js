window.onload = () => {
    wapo = document.querySelector("#wapo")
    wapo.preventDefault 
    wapo.addEventListener('click', trunWapeton)
    //trunWapeton();
}

function trunWapeton(e){
    //e.preventDefault;
    //Bigest
    document.querySelector('#container').backgroundColor= "#B983FF"
    //Main 
    main = document.querySelector("#main")
    main.className  = "jumbotron"
    footer = document.getElementById('divfooter')
    footer.className = "alert alert-danger"
    footer.style.backgroundColor = "#99FEFF";
    //footer.style.height ="7px";
    divhrefs = document.querySelector("#divhrefs")
    divhrefs.style.backgroundColor = "#94B3FD"
    divhrefs.style.border = "1px black"
}