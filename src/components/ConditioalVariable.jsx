export default function ConditionalVariable() {
  let message;
  const displayValue = true;
  if (displayValue) {
    message = <h1> This is the frist message.</h1>;
  } else {
    message = <h1>This is the second message.</h1>;
  }
  return message;
}
