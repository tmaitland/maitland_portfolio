
export default class Rocket {
    constructor(canvas, ctx, x, y, n, w, h) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.height = 11;
        this.width = 60;

        this.x = x + w / 1.8; //- this.width/2
        this.y = y + h / 1.5; //- this.height/2;

        this.velocity = 6;
        this.damage = 5;
        this.number = n;

        this.init();
    }

    init() {
        this.image = new Image();
        this.image.src = '../imgs/rocket.png';

        this.image.onload = () => {
            this.draw();
        }
    }

    draw(destroy, enemies) {
        let x = this.x;
        let y = this.y;

        this.ctx.drawImage(this.image, x, y, this.width, this.height);
        this.x += this.velocity;

        if ((this.x + this.width) > this.canvas.width) {
            destroy();
        }

        if (enemies) {
            for (let i = 0; i < enemies.length; i++) {
                if (x >= enemies[i].x && x <= enemies[i].x + enemies[i].width) {
                    if (y >= enemies[i].y && y <= enemies[i].y + enemies[i].height) {
                        let explode = new Audio('audio/explosion.wav');
                        explode.play();
                        destroy();

                        enemies[i].takeDamage(this.damage);
                        return;
                    }
                }
            }
        }
    }
}