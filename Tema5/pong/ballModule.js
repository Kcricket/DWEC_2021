class bola{
    constructor(posX, posY, vX, vY, radio){
        this.x = posX
        this.y = posY
        this.vX = vX
        this.vY = vY
        this.radio = radio
        this.svgWidth = document.getElementById("panel").clientWidth;
        this.svgHeight = document.getElementById("panel").clientHeight;
    }
    mueve(bar, barP, game){
        this.x += this.vX;
        this.y += this.vY;    

        if (this.x-this.radio<=0)
        {
            //Aqui controlo el eje x a la vez que añado los puntos
            game.updatePlayer()
            console.log(game.scorePlayer)
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: this.svgWidth-this.radio;
        }else if(this.x+this.radio >= this.svgWidth){
            game.updateCpu()
            console.log(game.scoreCpu)
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: this.svgWidth-this.radio;
        }
        // Eje Y
        if (this.y-this.radio <=0 || this.y+this.radio >= this.svgHeight )
        {
            //Cambia de sentido la y
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: this.svgHeight-this.radio;
        }
        // Barrita Check
        if (this.x-this.radio<=bar.x && this.y>= bar.y && this.y<= bar.y+bar.largo){
            this.vX *= -1;
        }
        // BarritaPlayer Check
        if (this.x+this.radio>=barP.x && this.y>= barP.y && this.y<= barP.y+barP.largo){
            this.vX *= -1;
        }
        
    }
}

class interfazBola{
    constructor(bola, svg){
        this.bola = bola;
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        this.tagCircle.setAttribute("cx", bola.x)
        this.tagCircle.setAttribute("cy", bola.y)
        this.tagCircle.setAttribute('fill', 'black')
        this.tagCircle.setAttribute("r", bola.radio)
        svg.appendChild(this.tagCircle);
        
    }
    dibuja(){
        this.tagCircle.setAttributeNS(null, "cx", this.bola.x);
        this.tagCircle.setAttributeNS(null, "cy", this.bola.y);
    }

}

class barra {
    constructor(posicionX, posicionY, ancho, largo){
        this.x = posicionX;
        this.y = posicionY;
        this.ancho = ancho;
        this.largo = largo;
        this.velocidad = 5;
        this.svgWidth = document.getElementById("panel").clientWidth;
        this.svgHeight = document.getElementById("panel").clientHeight;
    }
    mueve(){
        this.y += this.velocidad;    
        //Control Y
        if (this.y  <=0 || this.y +this.largo >= this.svgHeight)
        {
            this.velocidad *= -1;
        }
    }
}
class interfazBarra{
    constructor(barra, svg){
        this.barra = barra;
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        this.tagCircle.setAttribute("x", barra.x)
        this.tagCircle.setAttribute("y", barra.y)
        this.tagCircle.setAttribute('fill', 'red')
        this.tagCircle.setAttribute("width", barra.ancho)
        this.tagCircle.setAttribute("height", barra.largo)

        svg.appendChild(this.tagCircle);
        
    }
    dibuja(){
        this.tagCircle.setAttributeNS(null, "y", this.barra.y);
    }

}

class barraPlayer{
    constructor(posicionX, posicionY, ancho, largo){
        this.x = posicionX;
        this.y = posicionY;
        this.ancho = ancho;
        this.largo = largo;
        this.velocidad = 20;
        this.svgWidth = document.getElementById("panel").clientWidth;
        this.svgHeight = document.getElementById("panel").clientHeight;
    }
    mueveUp(){
            this.y += this.velocidad; 
    }
    mueveDown(){
        this.y -= this.velocidad; 
}

}
class interfazBarraPlayer{
    constructor(barra, svg){
        this.barra = barra;
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        this.tagCircle.setAttribute("x", barra.x)
        this.tagCircle.setAttribute("y", barra.y)
        this.tagCircle.setAttribute('fill', 'red')
        this.tagCircle.setAttribute("width", barra.ancho)
        this.tagCircle.setAttribute("height", barra.largo)

        svg.appendChild(this.tagCircle);
    }
    dibuja(){
        this.tagCircle.setAttributeNS(null, "y", this.barra.y);
    }

}
class Game{
    constructor(scoreCpu, scorePlayer, div){
        this.scoreCpu = scoreCpu
        this.scorePlayer = scorePlayer
        this.tagScoreCpu = document.createElement('h1');
        this.tagScoreCpu.setAttribute("cpu", 0)
        this.tagScorePlayer = document.createElement('h1');
        this.tagScorePlayer.setAttribute('player', 0);
        this.tagAudio = document.createElement('audio');
        this.tagAudio.setAttribute('controls', 'controls');
        this.tagAudio.setAttribute('src', 'japsh.mp3');
        this.tagAudio.setAttribute('id', 'audio');

        div.appendChild(this.tagScoreCpu);
        div.appendChild(this.tagAudio)
        div.appendChild(this.tagScorePlayer)

    }
    updateCpu(){
        this.scoreCpu += 1
    }
    updatePlayer(){
        this.scorePlayer += 1
    }
    dibuja(){
        this.tagScoreCpu.innerHTML = 'Cpu: '+this.scoreCpu
        this.tagScorePlayer.innerHTML = 'Player: '+this.scorePlayer

    }
}
export{
    barra, interfazBarra, barraPlayer, interfazBarraPlayer, Game, bola, interfazBola
}