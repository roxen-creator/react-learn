export default function EventHandle() {
  function eventHandle() {
    console.log("button clicked");
  }
  return (
    <>
      <button onClick={eventHandle}>Click me</button>
    </>
  );
}
