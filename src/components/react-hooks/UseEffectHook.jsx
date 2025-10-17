import React, { useEffect, useRef, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [fromUseEffectValue, setFromUseEffectValue] = useState(null);

  useEffect(() => {
    console.log(`From useEffect : ${count}`);
    setFromUseEffectValue(count);
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(initialValue);
  };

  const handleIncrementFive = () => {
    setCount((prev) => prev + 5);
  };
  return (
    <div className="w-full h-full">
      <h2>UseEffectHook</h2>
      <p>
        useEffect is a React Hook that allows you to perform side effects in
        functional components. Side effects are actions that affect something
        outside of the component, like: Fetching data from an API Updating the
        DOM manually Setting timers (setTimeout, setInterval).
      </p>
      <div className="my-2">
        <div className="px-3 py-2 mx-2 my-1">Count Value : {count}</div>
        <div className="px-3 py-2 mx-2 my-1">
          Update Using useEffect Value : {fromUseEffectValue}
        </div>
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

export default UseEffectHook;
