import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
