import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';


function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  const [data,setdata]=useState(
    {
      name:"",
     email:"",
     password:""
    }
    
  );

 const onChangeHandler = (event) => {
  const { name, value } = event.target;
  setdata(prev => ({
    ...prev,
    [name]: value
  }));
};

  return (  
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? null : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>

        

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
      </form>
    </div>
  );
}

export default LoginPopup;
