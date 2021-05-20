const removeCalender = () => {
    const parent = document.getElementById("calender");
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
};

const preMonth = () => {
    removeCalender();
    standard.setMonth(standard.getMonth() - 1);
    appendContext(
        calender,
        makeCalender(standard.getFullYear(), standard.getMonth() + 1)
    );
};

const nextMonth = () => {
    removeCalender();
    standard.setMonth(standard.getMonth() + 1);
    appendContext(
        calender,
        makeCalender(standard.getFullYear(), standard.getMonth() + 1)
    );
};
