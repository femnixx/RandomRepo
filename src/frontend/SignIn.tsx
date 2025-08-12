import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    navigate('/');
    if (error) {
      console.error(error)
    } else {
      console.log('Logged in:', data)
    }
  }

  return (
    <div>
      <p>Welcome back</p>
      <div className='flex flex-col w-fit gap-y-5 ms-3 mt-5'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-1 px-2'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-1 px-2'
        />
      </div>
        <button onClick={handleLogin} className='mt-5 ms-3 hover:cursor-pointer'>Login</button>
    </div>
  )
}

export default SignIn
