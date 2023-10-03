import React, { useState } from 'react';
import '../Style/Counter.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter"> 
      <h1>Count -/+ all: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
