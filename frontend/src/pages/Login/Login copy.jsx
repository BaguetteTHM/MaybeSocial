import React from 'react'

export default function Login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className="loginLeft">
          <h3 className="logo">MySocialNetwork</h3>
          <span className="loginDescription">Plus qu'un Workplace...</span>
        </div>
        <div className="loginRight">
          <div className="loginBox"></div>
            <input placeholder='Email' className='loginInput'/>
            <input placeholder='Password' className='loginInput'/>
            <button className='loginButton'>Login</button>
            <button className='loginRegisterButton'>Pas encore inscrit ?</button>
        </div>
      </div>

    </div>
  )
}
