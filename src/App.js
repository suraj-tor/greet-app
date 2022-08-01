import React, { useState } from "react";
import "./App.css";

// function App() {
//     return (
//         <div>
//             <h1>Hello World! </h1>
//         </div>
//     );
// }
const button_style = {
    padding: "20px",
};

const App = () => {
    // const state = useState();
    // console.log(state);
    const [count, newCount] = useState(0);
    const IncNum = () => {
        newCount(count + 1);
    };
    return (
        <>
            <h1>
                <p style={{ textAlign: "center", size : "50px" }}>{count}</p>
                <button style={button_style} onClick={IncNum}>
                    Click Me
                </button>
            </h1>
        </>
    );
};

export default App;
