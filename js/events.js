addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function delimitarCenario(){
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    // Para resolver bugs de retorno a tela
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if(snake[0].x > 15 * box && direction == 'up') snake[0].x = 0
    if(snake[0].x > 15 * box && direction == 'down') snake[0].x = 0

    if(snake[0].x < 0  && direction == 'left') snake[0].x = 15 * box
    if(snake[0].x < 0  && direction == 'up') snake[0].x = 15 * box
    if(snake[0].x < 0  && direction == 'down') snake[0].x = 15 * box

    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if(snake[0].y > 15 * box && direction == 'right') snake[0].y = 0
    if(snake[0].y > 15 * box && direction == 'left') snake[0].y = 0

    if(snake[0].y < 0 && direction == 'up') snake[0].y = 15 * box
    if(snake[0].y < 0 && direction == 'right') snake[0].y = 15 * box
    if(snake[0].y < 0 && direction == 'left') snake[0].y = 15 * box
}

function gameOver(){
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over 🙁, recarregue a página para um novo Jogo.");  
            location.reload();         
        }
    }

}

function aumentarSnakeAtualizarScore(){
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; 
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
        score_count++;
    }
    
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    
    snake.unshift(newHead);
}

