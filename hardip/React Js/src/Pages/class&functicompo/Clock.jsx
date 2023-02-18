import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString("LED"));

  useEffect(() => {
    document.title = date;
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date().toLocaleTimeString("LED"));
  };

  return <div>{date}</div>;
};

export default Clock;
