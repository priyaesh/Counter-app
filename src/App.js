import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Counters from "./Components/Counters";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
