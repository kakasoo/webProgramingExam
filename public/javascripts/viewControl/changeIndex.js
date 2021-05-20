const writeToContentIndex = (message) => {
    const pre = document.createElement("div");
    pre.innerHTML = message;
    contentIndex.appendChild(pre);
};

const removeAllChild = () => {
    const parent = document.getElementById("contentIndex");
    if (parent === null) return;

    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
};

const initMessage = `
    <p id ="writing"> 컴퓨터는 잘못하지 않는다. </p>
    <p> tistory : kscodebase.tistory.com </p>
    <p> google  : kscodebase@gmail.com </p>
    <p> github  : kakasoo </p>
    <p> univ.   : gachon univ. </p>
`;

const init = () => {
    message = initMessage;
    writeToContentIndex(message);
};
