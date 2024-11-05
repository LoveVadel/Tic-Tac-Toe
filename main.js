 
let gameboard = [0,1,2,3,4,5,6,7,8];
let x = [];
let o = [];
let currentPlayer = "x";

const container = document.querySelector(".gameBoard");
const reset = document.querySelector("button");
const displayWin = document.querySelector("h2")

const winningCombo = [
    // winning combination numbers for tic tac toe game
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playGame(player, numb){
       
    /*function check win comperes a player array of numbers to the winning combo 
    to determine the winner whose numbers matches any of the winning combos*/
    function checkWin(playerArray){
        for(let combo of winningCombo){
          if(combo.every((num) => { return playerArray.includes(num)})){
            
            console.log(`${currentPlayer} WON!`);
            displayWin.textContent = `Player "${currentPlayer.toLowerCase()}" won the game`
            container.classList.add("no-clicks"); 
          }
        }
    }

    function checkDraw() {
        if (gameboard.every(cell => typeof cell === "string")) {
            displayWin.textContent = "No player won this round";
            container.classList.add("no-clicks");
        }
    }

    if(player === x){
        if(gameboard[numb] === "X" || gameboard[numb] === "O"){
          console.log("already selected")
        }
        else{
          player.push(gameboard[numb]);
          gameboard[numb] = "X";
          checkWin(x);
          if (!checkWin(x)) {
            checkDraw();
            }
        }
      }
      else if(player === o){
        if(gameboard[numb] === "X" || gameboard[numb] === "O"){
          console.log("already selected")
        }
        else{
          player.push(gameboard[numb]);
          gameboard[numb] = "O";
          checkWin(o);
          if (!checkWin(o)) {
            checkDraw();
        }
          
        }
    }

    
}

container.addEventListener("click", function(event){
    let cellIndex = event.target.dataset.index;
 
    if (!cellIndex || event.target.classList.contains("no-clicks")) {
        return; 
    }

    if(currentPlayer === "x"){
        playGame(x, cellIndex);
        event.target.textContent = currentPlayer.toUpperCase();
        currentPlayer = "o"
    }
    else if(currentPlayer === "o"){
        playGame(o, cellIndex);
        event.target.textContent = currentPlayer.toUpperCase()
        currentPlayer = "x"
    }
    event.target.classList.add("no-clicks");
    event.target.style.backgroundColor = "#f5f5f5"
})


reset.addEventListener("click", function(){
    x = [];
    o = [];
   currentPlayer = "x";
   displayWin.textContent = "";
    gameboard = [0,1, 2, 3, 4, 5, 6, 7, 8,];
    for(let child of container.children){
      child.textContent = "";
      child.style.backgroundColor = "white";
      child.classList.remove("no-clicks")
    }
    container.classList.remove("no-clicks")
  })