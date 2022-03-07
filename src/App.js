import React from "react";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import War from "./components/War";

function App() {
    return (
      <div className="App">
          <Login />
          <War />
      </div>
    );
}

export default App