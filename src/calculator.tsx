import { useState } from "react"
import './font.css';

const mainDiv: React.CSSProperties = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const btnStyle: React.CSSProperties = {
    height: "60px",
    width: "100px",
    fontFamily: "Mada, sans-serif",
    fontSize: "30px",
    backgroundColor: "#B4A0E5",
    color: "#2D3047",
    fontWeight: "bold"
}

const resultStyle: React.CSSProperties = {
    height: "60px",
    width: "400px",
    fontFamily: "Mada, sans-serif",
    fontSize: "30px",
    border: "2px solid black",
    backgroundColor:"white",
    fontWeight: "bold"
}

const historyStyle: React.CSSProperties = {
    height: "400px",
    width: "410px",
    border: "1px solid black",
    textAlign: "center",
    fontFamily: "Mada, sans-serif",
    backgroundColor: "#B4A0E5"
}


export function Calculator() {

    const [display, setDisplay] = useState("");
    const [history, setHistory] = useState<string[]>([]);


    function handleClick(value: string) {
        if (value === "C") {
            setDisplay("");
        } else if (value === "=") {
            const result = eval(display);
            const stateClone = result;
            setDisplay(stateClone);
            const historyClone = [...history];
            setHistory(historyClone);
            historyClone.push(display + " " + value + " " + result);
        } else {
            setDisplay(display + value);
        }
    }

    return <div style={{ backgroundColor: "#2D3047", height: "100vh" }}>
        <div style={mainDiv}>
            <div>
                <input type="text" id="result" disabled style={resultStyle} placeholder={display} />
                <table>
                    <tr>
                        <td><button onClick={() => handleClick("7")} style={btnStyle}>7</button></td>
                        <td><button onClick={() => handleClick("8")} style={btnStyle}>8</button></td>
                        <td><button onClick={() => handleClick("9")} style={btnStyle}>9</button></td>
                        <td><button onClick={() => handleClick("+")} style={btnStyle}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleClick("4")} style={btnStyle}>4</button></td>
                        <td><button onClick={() => handleClick("5")} style={btnStyle}>5</button></td>
                        <td><button onClick={() => handleClick("6")} style={btnStyle}>6</button></td>
                        <td><button onClick={() => handleClick("-")} style={btnStyle}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleClick("1")} style={btnStyle}>1</button></td>
                        <td><button onClick={() => handleClick("2")} style={btnStyle}>2</button></td>
                        <td><button onClick={() => handleClick("3")} style={btnStyle}>3</button></td>
                        <td><button onClick={() => handleClick("*")} style={btnStyle}>x</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleClick("C")} style={btnStyle}>C</button></td>
                        <td><button onClick={() => handleClick("0")} style={btnStyle}>0</button></td>
                        <td><button onClick={() => handleClick("/")} style={btnStyle}>÷</button></td>
                        <td><button onClick={() => handleClick("=")} style={btnStyle}>=</button></td>
                    </tr>
                </table>
                <br />
                <div style={historyStyle}>
                    <h1 style={{ color: "#2D3047" }}>History</h1>
                    <ul style={{ listStyle: "none" }}>
                        {history.map(h => <li style={{ fontSize: "30px", color: "#2D3047" }}>{h}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    </div>
}