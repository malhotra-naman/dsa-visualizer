import React from "react";
import "./Controls.css";

function Controls({ arraySize, setArraySize, resetArray, mergeSortVisualize }) {
  return (
    <div
      className="controls-container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <div className="controls-subtitle">Set Array Size</div>
        <input
          type="range"
          min="25"
          max="200"
          step="25"
          value={arraySize}
          onChange={(evt) => {
            console.log(evt.target.valueAsNumber);
            setArraySize(evt.target.valueAsNumber);
          }}
        />
      </div>
      <div>
        <button onClick={resetArray}>Reset Array</button>
      </div>
      <div>
        <button onClick={mergeSortVisualize}>Merge Sort</button>
      </div>
    </div>
  );
}

export default Controls;
