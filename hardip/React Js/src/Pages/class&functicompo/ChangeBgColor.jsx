import React, { useState } from "react";
import "../class&functicompo/changBg.css";

const ChangeBgColor = () => {
  const [ChangeColors, setcolor] = useState("yellow");
  let ChangeColor = (e) => {
    if (e.target.value === "yellow") {
      setcolor("yellow");
    }
    if (e.target.value === "red") {
      setcolor("red");
    }
    if (e.target.value === "green") {
      setcolor("green");
    }
    if (e.target.value === "orange") {
      setcolor("orange");
    }
  };
  return (
    <>
      <select name="color" id="color" onChange={ChangeColor}>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
        <option value="green">green</option>
      </select>
      <div className={ChangeColors}></div>
    </>
  );
};

export default ChangeBgColor;
