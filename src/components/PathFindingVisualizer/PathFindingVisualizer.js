import React, { useState, useEffect } from "react";
import Node from "./Node";

export default function PathFindingVisualizer() {
  const [table, setTable] = useState();

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr[i] = [];
      for (let j = 0; j < 200; j++) {
        arr[i][j] = {
          row: i,
          col: j,
        };
      }
    }
    setTable([...arr]);
  }, []);

  return (
    <div>
      {table.map((row, index) => (
        <div key={index} style={{ display: "flex" }}>
          {row.map((node, idx) => {
            return <Node key={idx} />;
          })}
        </div>
      ))}
    </div>
  );
}
