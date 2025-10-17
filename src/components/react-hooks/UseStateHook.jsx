import React, { useState } from "react";

const UseStateHook = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // above all setCount will run but only 1 will be incrememented
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(initialValue);
  };

  const handleIncrementFive = () => {
    // setCount((prev) => prev + 5); this will also work  and below code work too
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full">
      <h2>UseStateHook</h2>
      <p>
        useState is a React Hook that lets you add state (data that can change
        over time) to functional components.
      </p>
      <div className="my-2">
        <div className="px-3 py-2 mx-2 my-1">Count Value : {count}</div>
        <div>
          <button
            className="px-2 py-1 mx-2 my-1 bg-gray-600 text-gray-300"
            onClick={handleIncrement}
          >
            Increment 1
          </button>
          <button
            className="px-2 py-1 mx-2 my-1 bg-gray-600 text-gray-300"
            onClick={handleDecrement}
          >
            Decrement 1
          </button>
          <button
            className="px-2 py-1 mx-2 my-1 bg-gray-600 text-gray-300"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="px-2 py-1 mx-2 my-1 bg-gray-600 text-gray-300"
            onClick={handleIncrementFive}
          >
            Increment 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateHook;
