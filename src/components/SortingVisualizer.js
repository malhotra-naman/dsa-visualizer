import React, { useState, useEffect } from "react";
import ArrayBar from "./ArrayBar";
import "./SortingVisualizer.css";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 730; i++) {
      arr.push(randomInt(5, 750));
    }
    setArray([...arr]);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const _merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return [...arr, ...left, ...right];
  };

  const _mergeSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    const mid = arr.length / 2;
    const left = arr.splice(0, mid);
    return _merge(_mergeSort(left), _mergeSort(arr));
  };

  const mergeSort = () => {
    const arr = [...array];
    const sortedArr = _mergeSort(arr, 0, arr.length - 1);
    setArray([...sortedArr]);
  };

  const quickSort = () => {};

  const heapSort = () => {};

  const bubbleSort = () => {};

  return (
    <div>
      <div className="SV-array">
        {array.map((value, idx) => (
          <ArrayBar key={idx} value={value} />
        ))}
      </div>
      <div className="SV-actions">
        <button onClick={resetArray}>Reset Array</button>
        <button onClick={mergeSort}>Merge Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
        <button onClick={heapSort}>Heap Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
      </div>
    </div>
  );
}
