class Flake {
    constructor(x, y, size, t, speed) {
        this.gradation;
        this.curX = x;
        this.curY = y;
        this.size = size;
        this.t = t; // 흔들림
        this.speed = speed;
    }

    draw = (ctx) => {
        this.t += 0.01; // 0.05 to PI (snow to rain)
        this.t = this.t >= Math.PI * 2 ? 0 : this.t;
        this.curY += this.speed;
        this.curX += Math.sin(this.t) * this.size * 0.3;

        if (this.curY > screen.height) {
            this.curY = -60 - this.size;
        }

        if (this.curX > screen.width) {
            this.curX = -60 - this.size;
        }

        ctx.beginPath();
        ctx.strokeStyle = "rgb(200,200,200)";
        ctx.lineWidth = 0.5;

        ctx.moveTo(this.curX, this.curY);
        ctx.lineTo(this.curX, this.curY);
        ctx.lineTo(this.curX, this.curY + 60 + this.size);
        ctx.stroke();

        ctx.closePath();
    };
}
