class Piece{
    constructor(name, color, startAt, index, possibleMoves){
        this.name = name
        this.color = color
        this.startAt = startAt
        this.index = startAt
        this.possibleMoves = possibleMoves;
    }

}

class Player{
    constructor(name, id, wins, losses, currentPieces){
        this.name = name
        this.id = id
        this.wins = 0 
        this.losses = 0
        this.currentPieces = 16
    }
}

class Game{
    constructor(id, moves, eaten, board){
        this.id = id
        this.moves = []
        this.eaten= []
        this.board = []
    }
    startGame(){
        //Create positions with bideimensional this.board
        //abc = [a,b,c,d,e,f,g,h]
        //var g = new Game(1)

        var board = []
        var y = []
        for(var i = 7; i>=0; i--){
            //console.log(i)
            y.push(i);
            board[i] = ['h'+i+'', 'g'+i+'', 'f'+i+'', 'e'+i+'', 'd'+i+'', 'c'+i+'', 'b'+i+'', 'a'+i+'']
        }
        this.board = board;
        console.log(board)
        return board;

    }
    findPositiond(index){
            //Nice method for inputting an index such as G1, and it returns
            //a new array with the real position
            
        for(var i=0;i<this.board.length;i++){
            //Solo verifica la primera posicion
            for(var j=0;j<8;j++){

                if(this.board[i][j] == index){
                    var index = [i, j]
                return index;
                }
            }
        }
        
                
    }
}
