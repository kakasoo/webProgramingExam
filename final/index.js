const clickDrink = (id) => {
    const drink = document.getElementById(id);
    if (!drink) {
        return;
    }
    window.location = drink.href;
};
