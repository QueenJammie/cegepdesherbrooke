import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Calendar() {
    return (
        <div className="Calendar">
          <div className="row">
            <h3>
              Cégep de Sherbrooke <small>Programmation d'applications</small>
            </h3>
            <div className="col-3">
              <ul>
                <li className="course-code no-list">420-PA1-SH</li>
                <li className="no-list">Création de pages Web</li>
              </ul>
            </div>
          </div>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calendar />, rootElement);
