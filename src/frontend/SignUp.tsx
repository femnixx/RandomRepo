import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div>
      <h1>Create An Account</h1>
      <div className="flex flex-col gap-y-3 mt-5">
        <p>Username</p>
        <input type="text" className="border-1 w-fit" />
      </div>
      <div className="flex flex-col gap-y-3">
        <p>Email</p>
        <input type="text" className="border-1 w-fit" />
      </div>
      <div className="flex flex-col gap-y-3">
        <p>Password</p>
        <input type="text" className="border-1 w-fit" />
      </div>
    </div>
    </>
  )
}

export default SignUp