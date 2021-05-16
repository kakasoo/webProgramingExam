class Sun {
    constructor(color, speed, startX, startY) {
        this.color = color;
        this.speed = speed;
        this.curX = startX;
        this.curY = startY;
        this.vibrationX = 0;
        this.vibrationY = 0;
        this.vibrationFlag = true;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        this.curX += this.speed;
        if (this.vibrationFlag) {
            this.curX += this.vibrationX;
            this.curY += this.vibrationY;
        } else {
            this.curX -= this.vibrationX;
            this.curY -= this.vibrationY;
        }
        this.vibrationFlag = !this.vibrationFlag;

        ctx.beginPath();
        ctx.arc(this.curX, this.curY, 50, 0, Math.PI * 2);
        ctx.fill();
    }
}
