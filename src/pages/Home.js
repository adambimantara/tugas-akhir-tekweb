import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Dashboard from "../components/Dashboard";
import ProductManagement from "../components/ProductManagement";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Menyimpan data pengguna yang login
  const [products, setProducts] = useState([]);

  const loginHandler = (status, userData) => {
    setIsLoggedIn(status);
    setUser(userData);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="container mx-auto p-6">
      {!isLoggedIn ? (
        <LoginForm onLogin={loginHandler} />
      ) : (
        <div>
          <Dashboard user={user} onLogout={logoutHandler} />
          <ProductManagement products={products} setProducts={setProducts} />
        </div>
      )}
    </div>
  );
};

export default Home;
