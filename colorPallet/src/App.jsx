import { useState } from "react";
import ColorContent from "./ColorContent";
import InputColor from "./InputColor";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white  px-4">
      <ColorContent
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
