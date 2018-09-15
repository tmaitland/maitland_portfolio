


window.onload = function () {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = 600;

    const ctx = canvas.getContext('2d');

    const environment = new Environment(canvas, ctx);
    const bird = new Bird(250, 300, ctx);
    const pipes = []; //new Pipe(600, -5, 200, 5, ctx);

    let pipeSet = generateRandPipe(ctx, canvas.width, canvas.height);
    pipes.push(pipeSet.top, pipeSet.bottom);

    setInterval(function () {
        let pipeSet = generateRandPipe(ctx, canvas.width, canvas.height);
        pipes.push(pipeSet.top, pipeSet.bottom);
    }, 2500);
    gameLoop();

    ctx.fillStyle = "#FFF";

    /* Main Game Loop */
    function gameLoop() {
        // ctx.fillRect(0, 0, canvas.width, canvas.height)
        bird.update(pipes);
        if (!bird.dead) {
            environment.update();
            
            pipes.forEach(function (pipe1) {
                pipe1.update();
            });
        }
        environment.render(ctx);
        pipes.forEach(function (pipe1) {
            pipe1.render();
        });
        bird.render();
        if (bird.dead) {
            gameOver(ctx, canvas);
        }
        window.requestAnimationFrame(gameLoop)
    }
};

function generateRandPipe(ctx, canvasWidth, canvasHeight) {
    let lengthTop = Math.round(Math.random() * 200 + 50);
    let lengthBottom = canvasHeight - 300 - lengthTop;
    let returnValue = {};
    returnValue.top = new Pipe(canvasWidth, -5, lengthTop, 3, ctx);
    returnValue.bottom = new Pipe(canvasWidth, canvasHeight + 5 - lengthBottom, lengthBottom, 3, ctx);
    return returnValue;
}

function gameOver(ctx, canvas) {
    ctx.font = "100px Verdana";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);

}
