const appendContext = (from, message) => {
    const pre = document.createElement("div");
    pre.innerHTML = message;
    from.appendChild(pre);
};

const appendContextWithClass = (from, message, className) => {
    const pre = document.createElement("div");
    pre.className = className;
    pre.innerHTML = message;
    from.appendChild(pre);
};

const prependContext = (from, message) => {
    const pre = document.createElement("div");
    pre.innerHTML = message;
    from.prepend(pre);
};
