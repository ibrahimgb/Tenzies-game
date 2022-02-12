import "./App.css";
import Gride from "./Gride";
function App() {
    return (
        <div className="main">
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <Gride />
            <div className="roll-btn">Roll</div>
        </div>
    );
}

export default App;
