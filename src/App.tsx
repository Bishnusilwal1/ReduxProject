import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
