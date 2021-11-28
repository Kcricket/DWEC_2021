import {Game} from '../js/script.js';
import {Player} from '../js/script.js';
//import {game1} from '../js/script.js'
//Tuve que exportar a game 1 hasta script.js para que la función de la clase pueda leerlo 
export var game1 = new Game();

window.onload = () => {
    console.log("cargado")

    var gamer = game1.createPlayer();

    game1.startGame(gamer)
    var choices = document.querySelectorAll('.choice');
    choices.forEach(element => {
        element.addEventListener('click', game1.play)
    });
}

console.log('cargado')