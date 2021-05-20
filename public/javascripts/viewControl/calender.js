const makeCalenderHead = (year, month) => {
    if (month == 13) month = 1;
    return `${year}년 ${month}월`;
};

const setColor = (day, mon) => {
    if (day <= 0 || day > month(`${mon}`)) return "&nbsp;";
    return day;
};

const makeDay = (day, month) => {
    const message = `<div> ${setColor(day, month)}</div>
    <div> ${setColor((day = day + 7), month)} </div>
    <div> ${setColor((day = day + 7), month)} </div>
    <div> ${setColor((day = day + 7), month)} </div>
    <div> ${setColor((day = day + 7), month)} </div>
    <div> ${setColor((day = day + 7), month)} </div>`;
    return message;
};

const getStandard = (year, month) => {
    const standardDay = new Date(year, month - 1);
    return 1 - standardDay.getDay() + 1;
};

const makeCalender = (year, month) => {
    let standardDay = getStandard(year, month);

    const message = `<div class = "CalenderHead" style="height:180px">${makeCalenderHead(
        year,
        month
    )}
        <div class ="days" style = "display:flex;"> 
            <div class = "day"> 월     ${makeDay(standardDay++, month)} </div>
            <div class = "day"> 화     ${makeDay(standardDay++, month)} </div>
            <div class = "day"> 수     ${makeDay(standardDay++, month)} </div>
            <div class = "day"> 목     ${makeDay(standardDay++, month)} </div>
            <div class = "day"> 금     ${makeDay(standardDay++, month)} </div>
            <div class = "day sat"> 토 ${makeDay(standardDay++, month)} </div>
            <div class = "day sun"> 일 ${makeDay(
                standardDay++,
                month
            )} </div>    
        </div>
    </div>`;
    return message;
};

const month = (mon) => {
    switch (mon) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            return "31";
        case "2":
            return FebDayOfLeafYear();
        default:
            return "30";
    }
};

const FebDayOfLeafYear = () => {
    if (standard.getFullYear() % 4 === 0) return "29";
    return "28";
};
const curDate = new Date();
const standard = curDate;

appendContext(
    calender,
    makeCalender(curDate.getFullYear(), curDate.getMonth() + 1)
);
