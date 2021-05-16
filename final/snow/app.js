class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        document.body.style.background = "black";

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
        this.snow = [];

        const maxNum = 1000;
        const speed = 1;
        const min = 1;

        for (let i = 0; i < maxNum; i++) {
            const x = Math.random() * screen.width;
            const y = Math.random() * screen.height;
            const size = 100 / (14 + Math.random() * 100);
            const t = Math.random() * (Math.PI * 2); // 좌우 낙하 운동을 위한 값
            let sp = Math.pow(size * 0.8, 2) * 0.15 * speed;
            sp = sp < min ? min : sp;

            const flake = new Flake(x, y, size, t, sp);
            this.snow.push(flake);
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

        this.snow.forEach((flake) => flake.draw(this.ctx));
    }
}

window.onload = () => {
    new App();
};
