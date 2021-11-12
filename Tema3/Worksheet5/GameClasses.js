class Piece{
    constructor(name, color, startAt, index, possibleMoves){
        this.name = name
        this.color = color
        this.startAt = startAt
        this.index = startAt
        this.possibleMoves = possibleMoves;
    }
    move(position, game){
        //This function moves the piece
        //var newPos = game.findPosition(position)// = Encuentra la posicion indicada
        this.index = position;
        //Register the move in the moves[]  
        game.moves.push([this.name, position, new Date().toLocaleString()])
        //Also register the position that is now occupied
        game.boardOcupations.push([this.name, position])
        //To check if the casilla is empti try game.filter(BoardOcupations = not)
        //Im starting to think that i should create a new class move
    }

    validatePown(desiredMove){}
    

}

class Player{
    constructor(name, id, wins, losses, currentPieces){
        this.name = name
        this.id = id
        this.wins = 0 
        this.losses = 0
        this.currentPieces = 16
    }
    movedPiece(){}
}

class Game{
    constructor(id, moves, eaten, board){
        this.id = id
        //Pushes an array with the pieceId, beginMove, endMove: [k, a2, b4]
        this.moves = []
        //Inserts a name and color each time a piece is eaten 
        this.eaten= []
        //Tells all cells index 'G1', 'H1'...
        this.boardIndex = []
        //Tells with 0 and 1 whether is the cell occupied 
        this.boardOcupations =[]
        //Tells what piece is in each cell
        this.piecesOnBoard =[]
    }
    startGame(){
        //Create positions with bideimensional this.board
        //abc = [a,b,c,d,e,f,g,h]
        //var g = new Game(1)
        var player = new Player('player1', '1')
        var board = []
        var y = []
        for(var i = 7; i>=0; i--){
            //console.log(i)
            y.push(i);
            board[i] = ['h'+(i+1)+'', 'g'+(i+1)+'', 'f'+(i+1)+'', 'e'+(i+1)+'', 'd'+(i+1)+'', 'c'+(i+1)+'', 'b'+(i+1)+'', 'a'+(i+1)+'']
        }
        //this.fillBoard();
        this.boardIndex = board;
        console.log(board)
        return board;

    }

    findPosition(index){
            //Nice method for inputting an index such as G1, and it returns
            //a new array with the real position
            
        for(var i=0;i<this.boardIndex.length;i++){
            //Solo verifica la primera posicion
            for(var j=0;j<8;j++){

                if(this.boardIndex[i][j] == index){
                    var index = [i+1, j+1]
                    var realIndex=[i,j]
                console.log("Relative Index: "+index)    
                return realIndex;
                }
            }
        }
        
                
    }
  
}

    

