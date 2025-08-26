import React from 'react'

const SignUp2 = () => {
  return (
    <div>
        <p>Register with</p>
        <div className='flex bg-green-300 px-2 rounded-lg justify-around'>
              <p>F</p>
              <p>G</p>
        </div>
        <p>Or fill your credentials</p>
        <div>
          <p>Username</p>
          <input type="username" className='border-1' />
          <p>Email</p>
          <input type="email" className='border-1'/>
          <p>Phone number</p>
          <input type="text" className='border-1'/>
          <p>Password</p>
          <input type="password" className='border-1'/>
          <p>Confirm password</p>
          <input type="password" className='border-1'/>
          <br />
          <button>Sign Up</button>
          <br />
          <button className='text-center'>Already have an account?</button>
        </div>
    </div>
  )
}

export default SignUp2