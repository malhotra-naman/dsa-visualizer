import React from "react";
import "./ArrayBar.css";

export default function ArrayBar({ value }) {
  const barHeight = `calc(${value}px)`;
  return <div className="ArrayBar-container" style={{ height: barHeight }} />;
}
