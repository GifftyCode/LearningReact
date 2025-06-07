import { useState } from "react";
import ColorContent from "./ColorContent";
import InputColor from "./InputColor";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white  px-4">
      <ColorContent name={name} />
      <InputColor name={name} setName={setName} />
    </div>
  );
}

export default App;
