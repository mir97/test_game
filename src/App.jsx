import { useState } from "react";
import "./App.css";

function App() {
  const [cicrcleXY, setCicrcleXY] = useState({});
  const [squadXY, setSquadXY] = useState(false);
  const [stateButton, setStateButton] = useState(true);

  setInterval(() => {
    setSquadXY(squadXY ? false : true);
  }, 5000);

  return (
    <div>
      <div className="App">
        <div
          className="container"
          style={{ position: "relative", height: 300, backgroundColor: "blue" }}
        >
          <div
            id="squad1"
            className="squad"
            style={squadXY ? { top: 0 } : { top: 200 }}
          >
            1
          </div>
          <div id="squad2" className="squad" style={{ right: 20, top: 100 }}>
            2
          </div>

          <div id="cicrcle1" className="cicrcle" style={cicrcleXY}></div>
        </div>

        <button
          id="start"
          disabled={!stateButton}
          onClick={(e) => {
            let delay = 5;
            const button = document.getElementById("start");
            const squad1 = document.getElementById("squad1");
            const squad2 = document.getElementById("squad2");
            const circle = document.getElementById("cicrcle1");
            const { x: x_1, y: y_1 } = squad1.getBoundingClientRect();
            const { x: x_2, y: y_2 } = squad2.getBoundingClientRect();

            setStateButton(false);
            setInterval(() => {
              if (delay > 0) {
                delay = delay - 1;
                button.innerText = `00:0${delay}`;
              } else {
                button.innerText = "start";
              }
            }, 1000);

            setCicrcleXY({ top: y_1, left: x_1 });
            circle.classList.add("trans");

            setTimeout(() => {
              setCicrcleXY({ top: y_2, left: x_2 });
            }, 100);

            setTimeout(() => {
              setStateButton(true);
              setCicrcleXY({ top: 0, left: 0 });
              circle.classList.remove("trans");
            }, delay * 1000);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
