class Bullet {
    constructor(x, y, w, h, c, Yspeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = Yspeed;
    }

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
        console.log('shoot')
    }

    move() {
        this.y -= this.ySpeed
    }

    outOfBounds() {
        return this.y < 0;
    }

    hasHitItem(item) { //checks for overlap of all 4 sides
        return ((this.x + this.w) >= item.x &&
                this.x <= (item.x + item.w)) &&
            (this.y >= item.y &&
                this.y <= (item.y + item.h));
    }
    
    hasHitEnemy(enemy){
        return this.hasHitItem(enemy);
    }

    hasCollided() {
        var self = this;
        var collided = false;

        enemies.forEach(function (enemy, i) {
            if (self.hasHitEnemy(enemy)) {
                delete enemies[i];
                collided = true;
            }
        });
        
        enemies = enemies.filter(item => item !== undefined);
        return collided;
    }
}
