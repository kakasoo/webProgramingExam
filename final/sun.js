export class Sun {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
        this.curX = 0;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        this.curX += this.speed;
        ctx.beginPath();
        ctx.arc(this.curX, 100, 50, 0, Math.PI * 2);

        ctx.fill();
    }
}
