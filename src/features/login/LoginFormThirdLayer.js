import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signIn } from './loginSlice';

const LoginFormThirdLayer = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLoginChange = (event) => {
    const value = event.target.value;
    setLogin(value);
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  }

  const handleSignInClick = () => {
    const payload = {
      login: login,
      password: password
    };
    dispatch(signIn(payload));
  }

  return(
    <div className="loginContainer">
      <div className="loginForm">
        <div className="login">
          <label htmlFor="login">Login:</label>
          <input
            id='login'
            type='text'
            value={login}
            onChange={handleLoginChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button className="button buttonSignIn"
            type='button'
            onClick={handleSignInClick}
            >
            Come on
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginFormThirdLayer;