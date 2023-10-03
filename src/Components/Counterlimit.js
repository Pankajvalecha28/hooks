import React, { useEffect, useState } from 'react';
import '../Style/Counter.css';

function Counterlimit() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);


  return (
    <div className="Counter">
      <h1>Count 0-100: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counterlimit;
