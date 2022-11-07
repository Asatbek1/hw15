import React, { useState } from "react";

import "./App.css";
import DemoList from "./components/DemoList";
import Demo from "./components/Demo";
import Button from "./components/UI/Button/Button";
import { useCallback } from "react";
import { useMemo } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  const demoHandler = useCallback(() => {
    setLetShow((prev) => !prev); 
  }, []);
  const user = useMemo(() => {
    //Биз React.memo салганыбыз мн пропстан обект келсе рендер болуп кетеберет ошон учун useMemo колдонобуз 
    return {
      name: "Alina",
      age: 30,
    };
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {show && <p>This is new</p>}
      {/*show true болсо текст чыгат */}
      <Button onClick={showHandler}>Click me</Button>
      <DemoList />
      <Demo onClick={demoHandler} user={user} />
    </div>
  );
}

export default App;
