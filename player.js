class Player {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = P_WIDTH;
        this.h = P_HEIGHT;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        if (rightKeyPressed && this.x < canvas.width - this.w) {
            this.x += this.xSpeed;
        }
        if (leftKeyPressed && this.x > 0) {
            this.x -= this.xSpeed;
        }
        if (upKeyPressed && this.y > 0) {
            this.y -= this.ySpeed;
        }
        if (downKeyPressed && this.y < canvas.height - this.h) {
            this.y += this.ySpeed;
        }
    }
    
    startPos(){
        this.x = canvas.width / 2 - this.w / 2;
        this.y = canvas.height - this.h * 2;
        startingPos = false;
    }
}
