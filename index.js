const setBodySize = () => {
    const body = document.body;
    body.style.width = window.innerWidth + "px";
    body.style.minHeight = window.innerHeight + "px";
    const start_modal = document.getElementById("start_modal");
    start_modal.style.width = window.innerWidth + "px";
    start_modal.style.minHeight = window.innerHeight + "px";
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

window.onload = () => {
    const modalText = document.getElementById("modal_text");
    const modalText2 = document.getElementById("modal_text2");

    setInterval(() => setBodySize());
    setModalText(modalText, "안녕하세요!");
};
