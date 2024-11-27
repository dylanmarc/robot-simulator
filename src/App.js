import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [x, setX] = useState(0); // X position of the robot
  const [y, setY] = useState(0); // Y position of the robot
  const [direction, setDirection] = useState("N"); // Robot's facing direction

  // Move the robot in the current direction
  const move = () => {
    if (direction === "N" && y > 0) setY(y - 1);
    if (direction === "S" && y < 4) setY(y + 1);
    if (direction === "E" && x < 4) setX(x + 1);
    if (direction === "W" && x > 0) setX(x - 1);
  };

  // Rotate the robot to a new direction
  const rotate = (newDirection) => setDirection(newDirection);

  // Get the class name for highlighting the direction
  const getDirectionClass = () => {
    switch (direction) {
      case "N": return "highlight-north";
      case "E": return "highlight-east";
      case "S": return "highlight-south";
      case "W": return "highlight-west";
      default: return "";
    }
  };

  return (
    <div className="app">
      <h1 className="title">Robot Simulator</h1>
      <div className="grid">
        {[...Array(5)].map((_, row) =>
          [...Array(5)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`cell ${row === y && col === x ? "robot" : ""} ${
                row === y && col === x ? getDirectionClass() : ""
              }`}
            >
              {row === y && col === x ? "🤖" : ""}
            </div>
          ))
        )}
      </div>
      <div className="controls">
        <div className="rotate-buttons">
          <button onClick={() => rotate("N")}><FontAwesomeIcon icon={faArrowUp} /></button>
          <div>
            <button onClick={() => rotate("W")}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button onClick={() => rotate("S")}><FontAwesomeIcon icon={faArrowDown} /></button>
            <button onClick={() => rotate("E")}><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <button className="move-button" onClick={move}><FontAwesomeIcon icon={faPlay} /> Move</button>
      </div>
    </div>
  );
};

export default App;
