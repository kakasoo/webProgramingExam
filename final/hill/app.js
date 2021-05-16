import { Hill } from "./hill.js";
import { Sun } from "./sun.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill("#fd6bea", 0.2, 12),
            new Hill("#ff59c2", 0.5, 8),
            new Hill("#ff4674", 1.4, 6),
        ];

        this.sun = new Sun("#FFA800", 1.4, 0, 100);
        this.moon = new Sun("#00aaFF", 1.4, -1000, 100);

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx);
        }

        this.sun.draw(this.ctx);
        this.moon.draw(this.ctx);
        if (this.moon.curX >= 0 && this.moon.curX <= this.stageWidth / 2) {
            // document.body.style.background = "rgb(0,53,29)";
            document.body.className = "night";
            this.sun.curX = -60;
        }

        if (this.sun.curX >= 0 && this.sun.curX <= this.stageWidth / 2) {
            // document.body.style.background = "#ffcaec";
            document.body.className = "morning";
            this.moon.curX = -60;
        }
    }
}

window.onload = () => {
    new App();
};
