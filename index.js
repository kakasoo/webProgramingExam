setBodySize = () => {
    const body = document.body;
    body.style.width = window.innerWidth + "px";
    body.style.minHeight = window.innerHeight + "px";
    const start_modal = document.getElementById("start_modal");
    start_modal.style.width = window.innerWidth + "px";
    start_modal.style.minHeight = window.innerHeight + "px";
};

setModal = () => {
    const start_modal = document.getElementById("start_modal");
};

window.onload = () => {
    setInterval(() => setBodySize());
    setModal();
};
