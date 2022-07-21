import React from "react";
import ReactDOM from "react-dom";

import "./app.css";

function App() {
  etablissementName = "Cégep de Sherbrooke";
  return (
    <div className="App">
      <div className="row">
        <h3>
          {etablissementName} <small>Programmation d'applications</small>
        </h3>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);