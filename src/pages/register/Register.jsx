import React from 'react'
import './Register.scss'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>TrI Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consectetur, illum quis?In necessitatibus voluptatem
             tempore possimu vitae est pariatur repudiandae,
            </p>
            <span>Do you have an account?</span>
            <Link to='/login'>
            <button>Login</button>
            </Link> 
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="text" placeholder='name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register