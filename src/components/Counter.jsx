import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrement] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function incrementBy() {
    setIncrement(incrementBy + 1);
  }
  return (
    <>
      <h1>The count is: {count}</h1>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <h2>The increment value is: {incrementBy}</h2>
    </>
  );
}
