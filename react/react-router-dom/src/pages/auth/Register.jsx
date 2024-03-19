import React from 'react'
import '../../App.css'

function Register() {
  return (
    <div>
        <h2>Register</h2>
        <div className='register_input_container'>
            <input placeholder='e-mail' />
            <input type='password' placeholder='password' />
        </div>
        
    </div>
  )
}

export default Register