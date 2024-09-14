//stoped at 25:00

//board
var blockSize = 20;
var rows = 20;
var cols = 20;
var board;
var context; //drawing object

// snake head position
var snakeX = blockSize *5;
var snakeY = blockSize *5;

var snakeBody = [];

// velocity
var velocityX = 0;
var velocityY = 0;
//food position

var foodX;
var foodY;


window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    //we only call it once instead we want to call it multiple times
    //update();
    setInterval(update,1000/11.5);
}

function update(){
    //the canvas
    context.fillStyle = "black";
    context.fillRect(0,0, board.width, board.height);
    
    // the food be sure to draw the food first
    context.fillStyle ="red";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    
    //to check if snake eats food
    if(snakeX== foodX && snakeY == foodY ){
        //array body segments
        snakeBody.push([foodX,foodY])
        placeFood();
    }

    //the snake
    context.fillStyle = "yellow";
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    // update the snake velocity everytime
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    //now draw the segment
    for(let i=0;i < snakeBody.length;i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
    }

 
}
function changeDirection(e){
if(e.code == "ArrowUp" && velocityY!=1){
    //we need to give it some velocity or it cant move
    velocityX = 0;
    velocityY = -1;
}
else if(e.code=="ArrowDown"&&velocityY!=-1){
    velocityX = 0;
    velocityY = 1;
}
else if(e.code=="ArrowLeft"){
    velocityX = -1;
    velocityY =0;
}
else if(e.code=="ArrowRight"){
    velocityX =1;
    velocityY=0;
}
} 

function placeFood(){
    foodX = Math.floor(Math.random()*cols) *blockSize ;
    foodY = Math.floor(Math.random()*rows) * blockSize;

}