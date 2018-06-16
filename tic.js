const jj = "O";
const aiPlayer = "X";
const winCombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
    
]

const cells = document.querySelectorAll('.cell');
var origBoard;

startGame();

function startGame(){
    document.querySelector(".endgame").style.display="none";
    origBoard = Array.from(Array(9).keys());
    //console.log(origBoard);
    for(var i=0;i<cells.lenght;i++){
        cells[i].innerText='';
        cells[i].style.removeProp('background-color');
        cells[i].addEventListener('click',turnCLick,false);
        
    }
}

function turnClick(square){
    console.log(square.target.DOCUMENT_POSITION_CONTAINED_BY);
}