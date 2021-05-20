const makeFrame = (position, img) => {
    const message = `
		<a href="./portfolio/${img}/index.html">
			<img src = "./public/images/portfolio/javascript.png" class="portfolio">
			<p style="margin:0px; color:black; text-decoration:none;">${img}</p>
		</a>
		`;
    appendContextWithClass(position, message, "frame");
};

const insertData = (pos, names) => {
    const outer = document.getElementById(pos);
    for (const i in names) {
        makeFrame(outer, names[i]);
        appendContextWithClass(outer, null, "interval");
    }
};

insertData("portfolio", [
    "vending",
    "buffer",
    "hill",
    "keyboard",
    "rain",
    "snow",
]);
