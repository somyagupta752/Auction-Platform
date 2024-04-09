// App.js

import React from 'react';
import './Signin.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          <a href='/bidders'>  <button type="submit" className="login_btn ">Login</button></a>
            <div className="signup-link">
              <a href="/signup">Signup</a>
            </div>
          </form>
        </div>

        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>
    );
  }
}

export default LoginForm;
