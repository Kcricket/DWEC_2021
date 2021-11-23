
class Player{
    constructor(name){
        this.name = name;
        this.history = [];

        this.add = function (x) {
            this.history.push(x);
        };
    }
    
}

class Game{
    constructor(player){
        this.player = player
        this.score ;
        this.winner ;
    }
    startGame(player1){
        //Create player
        this.player = player1.name;
        //Set score 
        this.score = [0, 0];
        //Palayer.play vs resultado
        //capuResult = Math.floor(Math.random()*3)
        //Add winner 

    }
    createPlayer(){
        var namex = document.getElementById('playername')
        var name = prompt('Introduce your name')
        var player1 = new Player(name)
        namex.innerHTML = `Welcome ${name}`

        return player1;
    }
    compare(result){
          //Create number for cpu and compare with player 
          cpuResult = Math.floor(Math.random()*3)
          if (parseInt(e.target.getAttribute('value')) == 0){
              if( cpuResult == 1){
                  //Rock Wins
                  console.log('win')
                  scorePlayer.value = 1
              }else if(cpuResult == 2){
                  console.log('lost')
                  //Rock lost
                  scorePlayer.value = 1
  
              }else
              //Empate
              console.log('empate')
          }
          //Set score
    };
    setScore(){
        var scoreCpu = document.getElementById("cpu_score");
        var scorePlayer = document.getElementById('player_score');
        scoreCpu.innerHTML = `Cpu: ${game1.score[1]}` 
        scorePlayer.innerHTML = `You: ${game1.score[0]}`
    }
    play(e){
        var jumboPlayer = document.getElementById('player_jumbo');
        var jumboCpu = document.getElementById('cpu_jumbo');
        var id = e.target.getAttribute('id');
        var cpuResult = Math.floor(Math.random()*3)

        //this.history = new Array;
        //options = [0, 1, 2]
        //option;
        //Chooose option
        switch (id) {
            //Rock ----------------------------------------------------
            case 'choice0': // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
              console.log('rock');
              var result ;
              if( cpuResult ===1){
                jumboPlayer.style.backgroundImage = `url(f${0}.jpg)`;
                jumboPlayer.style.backgroundSize= 'cover';
                console.log('lost')
                jumboCpu.style.backgroundImage = `url(f${1}.jpg)`;
                jumboCpu.style.backgroundSize= 'cover';
                game1.score[1] += 1 
            
                }else if(cpuResult === 2){
                    console.log('win')
                    jumboCpu.style.backgroundImage = `url(f${2}.jpg)`;
                    jumboCpu.style.backgroundSize= 'cover';
                    game1.score[0] += 1 


                }else if( cpuResult === 0){
                jumboCpu.style.backgroundImage = `url(f${0}.jpg)`;
                jumboCpu.style.backgroundSize= 'cover'
                console.log('empate')
                }   
                game1.setScore()
                
                break;
                //Paper ---------------------------------------------------

            case 'choice1': // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
              console.log('paper');
              jumboPlayer.style.backgroundImage = `url(f${1}.jpg)`;
              jumboPlayer.style.backgroundSize= 'cover';
              if( cpuResult ===1){
                  //SetCpu
                jumboCpu.style.backgroundImage = `url(f${1}.jpg)`;
                jumboCpu.style.backgroundSize= 'cover';
                //Add winner
                console.log('empate')
                 
            
                }else if(cpuResult === 2){
                    console.log('lost')
                    jumboCpu.style.backgroundImage = `url(f${2}.jpg)`;
                    jumboCpu.style.backgroundSize= 'cover';
                    game1.score[1] += 1 


                }else if( cpuResult === 0){
                jumboCpu.style.backgroundImage = `url(f${0}.jpg)`;
                jumboCpu.style.backgroundSize= 'cover';
                game1.score[0] += 1

                //Set score
                
                console.log('win')

                }
                game1.setScore()

              //this.history.add(1)
              break; // Al encontrar un "break", no será ejecutado el 'case 2:'
            case 'choice2':
                jumboPlayer.style.backgroundImage = `url(f${2}.jpg)`;
                jumboPlayer.style.backgroundSize= 'cover';
                if( cpuResult ===1){
                    //SetCpu
                  jumboCpu.style.backgroundImage = `url(f${1}.jpg)`;
                  jumboCpu.style.backgroundSize= 'cover';
                  //Add winner
                  game1.score[0] += 1 

                  console.log('win')
                   
              
                  }else if(cpuResult === 2){
                      console.log('empate')
                      jumboCpu.style.backgroundImage = `url(f${2}.jpg)`;
                      jumboCpu.style.backgroundSize= 'cover';
                      //game1.score[1] += 1 
  
  
                  }else if( cpuResult === 0){
                  jumboCpu.style.backgroundImage = `url(f${0}.jpg)`;
                  jumboCpu.style.backgroundSize= 'cover';
                  game1.score[1] += 1
                  console.log('lost')
  
                  }
       

              console.log('sizzors');
              game1.setScore()

              break;
          }
          
    }

}

window.onload = () => {
    game1 = new Game();
    gamer = game1.createPlayer();

    game1.startGame(gamer)
    choices = document.querySelectorAll('.choice');
    choices.forEach(element => {
        element.addEventListener('click', game1.play)
    });
}