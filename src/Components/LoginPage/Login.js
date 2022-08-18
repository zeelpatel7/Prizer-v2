import React, { useRef, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';

function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth()


  async function handleSubmit(e) {
    e.preventDefault();

    try{
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      alert('Account opened successfully');
    } catch {
      alert('Error signing up')
    }

    setLoading(false);
  }


  return (
    
    <div className="LoginPage">

      <div className='header'> Prizer </div>

      <div className='loginBox'> 

        <h3 className='loginBox_header'> Log in </h3>
        <h4 className= 'loginBox_header' id= 'lowerBody'>to continue to Zello</h4>
        
        <form onSubmit={handleSubmit}>
          <input className='textField' ref={emailRef} type='text' placeholder='Email' />
          <input className='textField' ref={passwordRef} type='password' placeholder='Password' />
          <button disabled={loading} className='login_button' type='submit'> Login </button>
        </form>

      </div>
    </div>
  );
}

export default Login;
