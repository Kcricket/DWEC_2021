import * as modx from './ballModule.js'
window.onload = () => {
    alert('use W to go up and S to go down')
    var svgWidth = document.getElementById("panel").clientWidth;
    var svgHeight = document.getElementById("panel").clientHeight;

    var barrita  = new modx.barra(90,40,10,250)
    var interBarra = new modx.interfazBarra(barrita, document.getElementById('panel'))

    var barritaPlayer  = new modx.barraPlayer(svgWidth-100,40,10,250)
    var interBarraPlayer = new modx.interfazBarraPlayer(barritaPlayer, document.getElementById('panel'))


    let mibola = new modx.bola(1000, 10, 20, 3, 20);
    let interfazMibola = new modx.interfazBola(mibola, document.getElementById('panel'))

    var game = new modx.Game(0,0, document.querySelector('.jumbo2'));


    window.addEventListener('keydown', function(e){
        if (e.keyCode == 83){
            barritaPlayer.mueveUp()
        }else if(e.keyCode == 87){
            barritaPlayer.mueveDown()
        }
    })
    setInterval(()=>{
        game.dibuja()
        interBarraPlayer.dibuja()
        barrita.mueve()
        interBarra.dibuja()
        mibola.mueve(barrita, barritaPlayer, game)
        interfazMibola.dibuja()
    }, 20)
 
}
