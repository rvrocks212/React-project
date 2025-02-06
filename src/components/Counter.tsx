// src/Counter.tsx
import React, { useState, useEffect } from "react";
import "./Counter.css";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    // Load initial count from localStorage or default to 0
    const savedCount = localStorage.getItem("counter");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // Save count to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-background" style={{ height: `${count * 5}%` }}></div>
      <div className="counter-content">
        <h2>Counter: {count}</h2>
        <button onClick={decrement}><RemoveIcon/></button>
        <button onClick={reset}><RestartAltIcon/></button>
        <button onClick={increment}><AddIcon/></button>
      </div>
    </div>
  );
};

export default Counter;
