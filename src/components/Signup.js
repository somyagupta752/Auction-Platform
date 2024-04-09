// App.js

import React from 'react';
import './Signup.css';


class SignUpForm extends React.Component {
  render() {
    return (
      <div className="container_signup">
        <div className="logon-box">
          <h2>SignUp</h2>
          <form action="#" className='form'>
          <div className="input-box">
              <input type="text" required />
              <label>First Name</label>
            </div>
            <div className="input-box">
              <input type="text" required />
              <label>Last Name</label>
            </div>
            <div className="input-box">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
         
            <button type="submit" className="signup_btn">SignUp</button>
            <div className="signup-link">
              <a href="/signin">SignIn</a>
            </div>
          </form>
        </div>
<div className='signup'>
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
        </div>
      </div>
    );
  }
}

export default SignUpForm;
