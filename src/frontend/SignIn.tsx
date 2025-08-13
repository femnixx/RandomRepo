import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      console.error(error)
      return;
    }
    console.log("logged in: ", data)
    // current user
    const { data: { user } } = await supabase.auth.getUser();
    console.log("Current user: ", user);
    navigate('/')

  }

  return (
    <form onSubmit={handleLogin}>
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
          <button className='mt-5 ms-3 hover:cursor-pointer'>Press enter</button>
      </div>
      <Link to="/">LandingPage</Link>
    </form>
  )
}

export default SignIn
