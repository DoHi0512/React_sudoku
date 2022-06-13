import "./App.css";
import React, { useState } from "react";
import Header from "./header";
import Body from "./body";
function App() {
  const [ans, setAns] = useState("");

  return (
    <div className="App">
      <Header setAns={setAns} ans={ans} />
      <Body />
    </div>
  );
}

export default App;
