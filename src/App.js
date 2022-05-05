import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Topbar />
    </Router>
  );
}

export default App;
