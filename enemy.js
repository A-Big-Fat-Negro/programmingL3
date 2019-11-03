class Enemy {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if(this.x > canvas.width - this.w || this.x < 0){
            this.xSpeed *= -1;
        }
        if(this.y > canvas.height){
            this.y = 0 - this.h;
        }
    }
    
}
