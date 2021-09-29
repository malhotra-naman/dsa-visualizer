import React, { useState, useEffect } from "react";
import Node from "./Node";

export default function PathFindingVisualizer() {
  const [table, setTable] = useState();

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = [];
      for (let j = 0; j < 50; j++) {
        arr[i][j] = {
          row: i,
          col: j,
        };
      }
    }
    setTable([...arr]);
  }, []);

  return (
    <div style={{ margin: "4em" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {table[0].map((row, index) => {
          return <Node />;
        })}
      </div>
    </div>
  );
}
