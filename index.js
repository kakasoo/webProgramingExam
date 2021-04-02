const setBodySize = () => {
    const body = document.body;
    body.style.width = window.innerWidth + "px";
    body.style.minHeight = window.innerHeight + "px";
    const startModal = document.getElementById("startModal");
    startModal.style.width = window.innerWidth + "px";
    startModal.style.minHeight = window.innerHeight + "px";

    const backgroundPicture = document.createElement("canvas");
    backgroundPicture.style.width = window.innerWidth + "px";
    backgroundPicture.style.height = window.innerHeight + "px";
};

const blurString = (element, time) => {
    let subDelay = 0;
    const id = setInterval(() => {
        if (element.style.color === "transparent") {
            element.style.color = "black";
        } else {
            if (subDelay !== 3) {
                subDelay++;
                return;
            }

            subDelay = 0;
            element.style.color = "transparent";
        }
    }, 80);

    setTimeout(() => {
        element.style.color = "black";
        clearInterval(id);
    }, time);
};

const lazyTyping = (element, splitString) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < splitString.length; i++) {
            setTimeout(() => {
                element.textContent += splitString[i];
                const textWidth = element.offsetWidth;
                element.style.left = `calc(50% - ${textWidth / 2}px)`;
            }, 200 * i);
        }
        blurString(element, 200 * splitString.length);

        setTimeout(() => {
            return resolve();
        }, 200 * splitString.length);
    });
};

const clearTyping = (element, splitString) => {
    return new Promise((resolve, reject) => {
        const clearingString = [...splitString];
        for (let i = 0; i < splitString.length; i++) {
            setTimeout(() => {
                clearingString.pop();
                element.textContent = clearingString.join("");
            }, 200 * i);
        }
        blurString(element, 200 * splitString.length);

        setTimeout(() => {
            return resolve();
        }, 200 * splitString.length * 1.4);
    });
};

const setModalText = async (element, nextLine) => {
    const splitString = nextLine.split("");
    await lazyTyping(element, splitString);
    await clearTyping(element, splitString);
};

const showText = async () => {
    await setModalText(modalText, "안녕하세요!");
    await setModalText(modalText, "안녕하다고요!");
    await setModalText(modalText, "비동기 프로그래밍이라 쉽지가 않네요.");
    await setModalText(modalText, "모두 해피 자바스크립트!");
};

const drawLazyCircle = (context, xPos, yPos, radius = 30, delay = 0) => {
    setTimeout(() => {
        context.beginPath();
        context.arc(
            xPos,
            yPos,
            radius,
            0,
            ((2 * Math.PI) / 100) * delay,
            false
        );
        context.stroke();
    }, 10);
};

const getRandomColor = () => Math.random() * 255;

const setCanvas = () => {
    const backgroundPicture = document.createElement("canvas");
    backgroundPicture.id = "backgroundPicture";
    backgroundPicture.width = window.innerWidth;
    backgroundPicture.height = window.innerHeight;
    document.body.appendChild(backgroundPicture);

    const context = backgroundPicture.getContext("2d");
    backgroundPicture.onclick = (event) => {
        const xPos = event.clientX;
        const yPos = event.clientY;
        context.strokeStyle = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
        for (let i = 0; i <= 100; i++) {
            drawLazyCircle(context, xPos, yPos, 30, i);
        }
    };
};

window.onresize = () => {
    setBodySize();
};

window.onload = () => {
    setBodySize();
    const modalText = document.getElementById("modalText");
    showText();
    setCanvas();
};
