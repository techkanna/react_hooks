import React from 'react';

function Counter({ counter, countOne }) {
  return (
    <div className="counter">
      <button onClick={counter}>counter</button>
      <p>{countOne}</p>
    </div>
  );
}

export default Counter;
