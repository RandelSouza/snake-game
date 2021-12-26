function criarBG() {     
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
  
}

function criarCobrinha(){
    for( i = 0; i < snake.length; i++ ){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood(){
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box)
}

function score(){
     context.fillText("Score: " + score_count, 0, 20);
}