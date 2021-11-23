import React, { Component } from "react";
import "../../SortingVisualizer/Controls.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { generateArray } = this.props;

    generateArray(87);
    document.getElementById("changeSize").value = 50;
    const { updateAlgorithm } = this.props;
    updateAlgorithm(this.props.pathname);
  }

  handleChange(evt) {
    const { generateArray } = this.props;

    generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
  }

  render() {
    const { array, algorithm, generateArray, sort, isRunning } = this.props;

    const speed =
      570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

    const color = isRunning ? "grey" : "black";

    const cursor = isRunning ? "auto" : "pointer";

    return (
      <div
        className="controls-container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <div id="arraySize" style={{ color: color }}>
            Change Array Size & Sorting Speed
          </div>
          <input
            id="changeSize"
            type="range"
            min="0"
            max="100"
            class="form-range"
            disabled={isRunning ? "disabled" : null}
            onChange={this.handleChange}
          />
        </div>
        <button
          id={!isRunning ? "generateArray" : "generateArrayX"}
          style={{ color: color, cursor: cursor }}
          onClick={!isRunning ? () => generateArray(array.length) : null}
          className="btn btn-info"
          disabled={isRunning ? "disabled" : null}
        >
          Generate New Array
        </button>

        {algorithm ? (
          <button
            id="sort"
            style={{ color: color, cursor: cursor }}
            onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
            className="btn btn-primary"
            disabled={isRunning ? "disabled" : null}
          >
            Sort!
          </button>
        ) : null}
      </div>
    );
  }
}

export default Toolbar;
