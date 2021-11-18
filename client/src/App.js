import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Home, Header, About, AddEditUser, UserInfo } from "./Imports/index";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer position="top-center" />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addUser" element={<AddEditUser />} />
            <Route path="/editUser/:id" element={<AddEditUser />} />
            <Route path="/userInfo/:id" element={<UserInfo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
