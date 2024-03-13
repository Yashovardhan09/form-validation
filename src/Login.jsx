import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dummyUsername = "Yashovardhan";
    const dummyPassword = "Yash@0209";

    if (username === dummyUsername && password === dummyPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (isLoggedIn) {
    return <p>Redirecting to Homepage...</p>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="card p-4">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
