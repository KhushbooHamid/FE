// SharedLogin.jsx
import React from 'react';
import './css/SharedLogin.css'

const SharedLogin = ({ userType }) => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-5 shared-login">
      <h1 className="mb-3">CareBridge</h1>
      <h3 className="mb-3">Login to continue as {userType}</h3>
      <form className="form-container">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-dark btn-dark">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SharedLogin;
