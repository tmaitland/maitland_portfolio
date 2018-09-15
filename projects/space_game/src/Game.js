import { Player, Enemy } from './entities/'; //imports go at the top 
// import { Enemy } from './entities'; //imports go at the top 

export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player(this.canvas, this.ctx);
        this.enemies = [new Enemy(this.canvas, this.ctx)];

        this.running = false;
        this.score = 0;
        this.lives = 10;
    }

    init() {
        this.player.init();
        this.enemies.forEach(enemy => {
            enemy.init();
        })
    }

    start() {
        this.running = true;
        this.init();
        this.draw();
    }

    stop() {
        this.running = false;
    }

    draw() {
        if (!this.running) {
            return;
        }
        // console.log('running')

        //Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       
        //Draw the rocket
        for (var n in this.player.weapon.shooting) {
            
            this.player.weapon.shooting[n].draw(() => {
                this.player.weapon.destroyRocket(n);
            }, this.enemies);
        }
         
        //Draw the enemy
        this.enemies.forEach(enemy => {
            if(enemy.health <= 0){
                this.destroyEnemy(enemy);
            }
            else {
               enemy.draw(); 
            }
            
        });
        
        //Draw Player
        this.player.draw();


        //Ammo number Displayed
        this.ctx.font = "50px Arial";
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('R ' + this.player.weapon.ammo, 20, 40);


        //create a heart for health of player - need to create more than one heart, tie it to lives and health
        this.ctx.fillText(this.player.health, this.canvas.width - 120, 40);
        this.image = new Image();
        this.image.src = '../imgs/heart_life.png';
        this.ctx.drawImage(this.image, this.canvas.width - 170, 0, 45, 45);
        


        this.ctx.save();
        this.ctx.restore();

        window.requestAnimationFrame(() => this.draw());

    }

    destroyEnemy(enemy){
        this.enemies = this.enemies.filter(e => e.id !== enemy.id);
    }
}