import React from "react";
import { useState } from "react";

const Functionfile = () => {
  const [varible, setveraible] = useState([]);

  const onchange = (e) => {
    let val = e.target.value;
    setveraible(val);
  };
  return (
    <div>
      <h1>{varible}</h1>
      <input type="text" value={varible} onChange={onchange} />
    </div>
  );
};

export default Functionfile;
