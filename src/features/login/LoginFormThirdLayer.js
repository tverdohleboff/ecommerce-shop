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
    <div>
      <div>
        <label htmlFor="login">Login</label>
        <input
          id='login'
          type='text'
          value={login}
          onChange={handleLoginChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button 
        type='button'
        onClick={handleSignInClick}
        >
        Sign In
      </button>
    </div>
  )
}

export default LoginFormThirdLayer;