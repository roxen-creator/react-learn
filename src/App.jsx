import EventHandle from "./components/EventHandle";
import Hello from "./components/Hello";
import Cars from "./components/Cars";
import ConditionalRender from "./components/ConditionalRender";
import ConditionalVariable from "./components/ConditioalVariable";
import ConditonalTernary from "./components/ConditionalTernary";
import Counter from "./components/Counter";
import Emails from "./components/Emails";
import Form from "./components/Form";

function App() {
  const person = {
    name: "roshan",
    age: 24,
    gender: "male",
    seatNo: [2, 3, 4, 5, 6],
  };

  return (
    <>
      <Form />
    </>
  );
}

export default App;
