let currDate = new Date(2022, 7, 29, 14);
let currHour = currDate.getHours();
let greeting = "";
let cssStyle = {};

if (currHour >= 1 && currHour < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
} else if (currHour >= 12 && currHour < 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
} else if (currHour >= 16 && currHour < 19) {
    greeting = "Good Evening";
    cssStyle.color = "orange";
} else {
    greeting = "Good Night";
    cssStyle.color = "navy";
}

function Greet() {
    return (
        <>
            <span style={cssStyle}>{greeting}</span>
        </>
    );
}

export default Greet;
