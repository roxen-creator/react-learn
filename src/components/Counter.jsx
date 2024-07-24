import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrement] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function incrementValue() {
    setIncrement(incrementBy + 1);
  }
  function decreasementValue() {
    setIncrement(incrementBy - 1);
  }

  return (
    <>
      <h1>The count is: {count}</h1>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <h2>The increment value is: {incrementBy}</h2>
      <button onClick={incrementValue}>Increment By</button>
      <button onClick={decreasementValue}>Decrease By</button>
    </>
  );
}
