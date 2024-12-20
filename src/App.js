import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"; // Pengimporan RegisterForm

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (status, userData) => {
    setIsLoggedIn(status);
    setUser(userData);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />{" "}
          {/* Rute untuk registrasi */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <h1>Welcome to Dashboard, {user?.name}</h1>
              ) : (
                <h1>Please login first</h1>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
