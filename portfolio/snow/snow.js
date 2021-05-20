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
        this.t += 0.05;
        this.t = this.t >= Math.PI * 2 ? 0 : this.t;
        this.curY += this.speed;
        this.curX += Math.sin(this.t) * this.size * 0.3;

        if (this.curY > screen.height) {
            this.curY = -10;
        }

        if (this.curX > screen.width) {
            this.curX = -10;
        }

        this.gradation = ctx.createRadialGradient(
            this.curX, // startCircle's x
            this.curY,
            0, // startCircle's size

            this.curX, // endCircle's x
            this.curY,
            this.size // endCircle's size
        );

        this.gradation.addColorStop(0, "rgba(255,255,255,1)");
        this.gradation.addColorStop(1, "rgba(255,255,255,0)");

        ctx.moveTo(this.curX, this.curY);
        ctx.fillStyle = this.gradation;
        ctx.beginPath();
        ctx.arc(this.curX, this.curY, this.size, 0, Math.PI * 2, true);
        ctx.fill();
    };
}
