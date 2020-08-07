import React from "react";
import { CurrentModule, useApp } from "./CurrentModule";
import Button from "./components/Button";
import JSX from "./JSX";
import StateSection from "./StateSection";
function App() {
  const { state } = useApp();
  return (
    <div className="bg-gray-300">
      <header className="header">
        <h1 className="text-center border- py-2 bg-blue-300">Overmind!!!</h1>
      </header>

      <StateSection section={"^[^_]"} title="App" />
      <StateSection section="_message" />
      <StateSection section="_server" />

      <Button action="setMessage" value="whatever" />
    </div>
  );
}

export default App;
CurrentModule(App);
