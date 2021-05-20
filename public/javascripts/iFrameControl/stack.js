const setPoint = (point) => {
    if (point === 1)
        return `<div class = "red"></div><div class = 'black'></div><div class = 'black'></div><div class = 'black'></div><div class = 'black'></div>`;
    if (point === 2)
        return `<div class = "red"></div><div class = "red"></div><div class = 'black'></div><div class = 'black'></div><div class = 'black'></div>`;
    if (point === 3)
        return `<div class = "greenyellow"></div><div class = "greenyellow"></div><div class = "greenyellow"></div><div class = 'black'></div><div class = 'black'></div>`;
    if (point === 4)
        return `<div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = 'black'></div>`;
    if (point === 5)
        return `<div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = "green"></div>`;
};

const makeFrame = (position, img, point) => {
    const message = `
    <img src = './public/images/about/${img}' class = "languages"></img>
    <div class = "point">
        ${setPoint(point)}
    </div>        
    `;
    appendContextWithClass(position, message, "frame");
};

const lang_names = [
    "python.png",
    "java.png",
    "kotlin.png",
    "C-lang.png",
    "C++.png",
    "javascript.png",
];
const lang_points = [2, 1, 1, 3, 3, 4];

const back_names = ["nodejs.png", "mysql.png", "express.png"];
const back_points = [4, 3, 4];

const front_names = ["html.png", "CSS.png"];
const front_points = [4, 3];

const devops_names = ["git.png", "NCP.png", "heroku.png"];
const devops_points = [4, 4, 2];

const insertData = (pos, names, points) => {
    if (pos === "lang") pos = languages;
    if (pos === "front") pos = frontend;
    if (pos === "back") pos = backend;
    if (pos === "devops") pos = devops;

    for (const i in names) {
        makeFrame(pos, names[i], points[i]);
        appendContextWithClass(pos, null, "interval");
    }
};

insertData("lang", lang_names, lang_points);
insertData("front", front_names, front_points);
insertData("back", back_names, back_points);
insertData("devops", devops_names, devops_points);
