import React from 'react'

const SignUp2 = () => {
  return (
    <div>
        <p className='w-full text-center'>Register with</p>
        <div className='w-full flex justify-center'>
          <div className='flex justify-center px-5 bg-green-300 gap-x-5  rounded-full justify-around w-fit'>
                <p>F</p>
                <p>G</p>
          </div>
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
          <div className='flex w-full flex-col'>
          <button>Sign Up</button>
            <button className='text-center'>Already have an account?</button>
            <button>Apply as an establishmennt</button>
          </div>
        </div>
    </div>
  )
}

export default SignUp2