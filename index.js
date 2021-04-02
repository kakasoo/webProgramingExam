const setBodySize = () => {
    const body = document.body;
    body.style.width = window.innerWidth + "px";
    body.style.minHeight = window.innerHeight + "px";
    const startModal = document.getElementById("startModal");
    // console.log(startModal);
    startModal.style.width = window.innerWidth + "px";
    startModal.style.minHeight = window.innerHeight + "px";
};

const blurString = (element, time) => {
    const id = setInterval(() => {
        if (element.style.color === "transparent") {
            element.style.color = "black";
        } else {
            element.style.color = "transparent";
        }
    }, 80);

    setTimeout(() => {
        element.style.color = "black";
        clearInterval(id);
    }, time * 1.5);
};

const lazyTyping = (element, splitString) => {
    for (let i = 0; i < splitString.length; i++) {
        setTimeout(() => {
            element.textContent += splitString[i];
            const textWidth = element.offsetWidth;
            element.style.left = `calc(50% - ${textWidth / 2}px)`;
        }, 200 * i);
    }
    blurString(element, 100 * splitString.length);
};

const setModalText = (element, nextLine) => {
    const splitString = nextLine.split("");
    lazyTyping(element, splitString);
};

const setCanvas = () => {
    const backgroundPicture = document.createElement("canvas");
    backgroundPicture.id = "backgroundPicture";
    console.log(window.innerHeight);
    backgroundPicture.width = window.innerWidth;
    backgroundPicture.height = window.innerHeight;
    document.body.appendChild(backgroundPicture);

    const context = backgroundPicture.getContext("2d");

    backgroundPicture.onclick = (event) => {
        const xPos = event.clientX;
        const yPos = event.clientY;
        console.log(context);
        context.fillStyle = "red";
        context.beginPath();
        console.log(xPos, yPos);
        context.arc(xPos, yPos, 30, 0, 2 * Math.PI, false);
        context.stroke();
    };
};

window.onresize = () => {
    setBodySize();
};

window.onload = () => {
    setBodySize();
    const modalText = document.getElementById("modalText");
    setModalText(modalText, "안녕하세요!");
    setCanvas();
};
