import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Cards from "./components/cards";
import { Mode } from "./types/mode";

function App() {
  const [changemode, setchangeMode] = useState<Mode>(Mode.light);

  const handlerClick = () => {
    setchangeMode((prevState) =>
      prevState === Mode.light ? Mode.dark : Mode.light
    );
  };
  // useEffect(() => console.log(changemode), [changemode]);
  return (
    <div className={changemode === Mode.light ? "App light" : "App dark"}>
      <Button change={handlerClick} mode={changemode} />
      <Cards mode={changemode} />
    </div>
  );
}

export default App;
