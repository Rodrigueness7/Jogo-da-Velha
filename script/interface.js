document.addEventListener("DOMContentLoaded", () =>{
    let squares = document.querySelectorAll(".square")
    
    squares.forEach((square) =>{
      square.addEventListener("click", handleClick)
    })
})

function handleClick(event){
    let square = event.target;
    let position = square.id;

   if(handleMove(position)){
    setTimeout( () =>{
     alert("Game over")
    },10)
   }
    updateSquare()
}

function updateSquare(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) =>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ""){
           square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

 let button = document.getElementById("button");
 
 button.addEventListener("click", () =>{

    board = ["","","","","","","","",""]
    gameOver = false;
    playerTime = 0;
    
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) =>{
        
    let position = square.id
    let symbol = board[position]

    
    if(gameOver == false){
        
        square.innerHTML = `<div class='${symbol}'></div>`
    }
        
    })
   
    
    

    })
    
    
