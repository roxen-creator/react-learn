import Welcome from "./Welcome";
import Code from "./Code";
export default function ConditionalRender() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
