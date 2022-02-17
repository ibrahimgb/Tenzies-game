import React from "react";
import "./App.css";
import Gride from "./Gride";
import Confetti from "react-confetti"
function App() {
    const [change, setChange] = React.useState(false);

    function update() {
        setChange((state) => !state);
    }

    return (
        <div className="main">
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <Gride change={change} setChange={setChange} />
            <div className="roll-btn" onClick={update}>
                Roll
            </div>
        </div>
    );
}

export default App;
