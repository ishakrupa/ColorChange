import React, { useState } from "react";
import Input from "./Input";
import "./styles.css";
import Toggle from "./Toggle";

export default function App() {
  const [colorvalue, setColorvalue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);
  return (
    <div className="App">
      <Input coloralue={colorvalue} hexValue={hexValue} Dark={isDarkText} />
      <Toggle
        coloralue={colorvalue}
        setColorvalue={setColorvalue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}
