import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { UNSAFE_ErrorResponseImpl, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp =  async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username
        }
      }
    })
    if (error) {
      alert(error)
    } else {
      const { data: { user } } = await supabase.auth.getUser();
      window.alert('User signed up as: ' + user?.user_metadata.username)
    }
  }
  return (
    <>
    <form>
      <div>
        <h1>Create An Account</h1>
        <div className="flex flex-col gap-y-3 mt-5">
          <p>Username</p>
          <input type="text" className="border-1 w-fit" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="flex flex-col gap-y-3">
          <p>Email</p>
          <input type="email" className="border-1 w-fit" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col gap-y-3">
          <p>Password</p>
          <input type="password" className="border-1 w-fit" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Link to="/">LandingPage</Link>
      </div>
    </form>
    </>
  )
}

export default SignUp