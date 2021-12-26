let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
context.font = "30px Arial";

let box = 32;
let snake = [];
let score_count = 0;

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}


function iniciarJogo(){        
    criarBG();    
    criarCobrinha(); 
    drawFood();
    score();
    aumentarSnakeAtualizarScore();
    delimitarCenario();
    gameOver();        
}

let jogo = setInterval(iniciarJogo, 100);
