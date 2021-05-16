class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.input = document.createElement("input");
        this.input.style.position = "fixed";
        this.input.style.top = "100px";
        this.input.style.right = "100px";
        this.input.style.width = "100px";
        this.input.style.background = "white";
        this.input.type = "range";
        this.input.min = 0;
        this.input.max = 6000;
        document.body.appendChild(this.input);

        document.body.style.background = "rgb(120,120,120)";

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
        this.rain = [];

        const maxNum = 6000;
        const speed = 20;
        const min = 14;

        for (let i = 0; i < maxNum; i++) {
            const x = Math.random() * screen.width;
            const y = Math.random() * screen.height;
            const size = 100 / (14 + Math.random() * 100);
            const t = Math.random() * (Math.PI * 2); // 좌우 낙하 운동을 위한 값
            let sp = Math.pow(size * 0.8, 2) * 0.15 * speed;
            sp = sp < min ? min : sp;

            const flake = new Flake(x, y, size, t, sp);
            this.rain.push(flake);
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.input.value; i++) {
            const flake = this.rain[i];
            if (this.input > 3000) {
                flake.speed += 20;
            }
            flake.draw(this.ctx);
        }
    }
}

window.onload = () => {
    new App();
};
