const doBlink = () => {
    const blink = document.getElementById('basePage');
    blink.style.visibility = blink.style.visibility == '' ? 'hidden' : '';
};

const startBlink = () => setInterval('doBlink()', 800);
window.onload = startBlink;
