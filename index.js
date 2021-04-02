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
    }, 50);

    setTimeout(() => clearInterval(id), time);
};

const lazyPrint = (element, splitString) => {
    for (let i = 0; i < splitString.length; i++) {
        setTimeout(() => {
            console.log(splitString[i]);
            element.textContent += splitString[i];
        }, 100 * i);
    }
    blurString(element, 100 * splitString.length);
};

const setModal = (nextLine) => {
    const modalText = document.getElementById("modal_text");
    const splitString = nextLine.split("");
    lazyPrint(modalText, splitString);
};

window.onload = () => {
    setInterval(() => setBodySize());
    setModal("안녕하세요");
};
