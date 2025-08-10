import React from 'react'
import { useState } from 'react'
import { supabase } from '../SupabaseClient'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignup = async () => {
        setLoading(true)
        const { data, error } = await supabase.auth.signUp({ email, password })
        setLoading(false)

        if (error) {
            alert(error.message)
        } else {
            alert('Signed up successfully! Check email to complete registrationn')
        }
    }

    const handleSignIn = async () => {
        setLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        setLoading(false)

        if (error) {
            alert(error.message)
        } else {
            alert('Signed in successfully!')
        }
    }
  
     return (
        <>
        <div>
            <h1>Supabase Auth</h1>
             <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleSignup} disabled={loading}>
        Sign Up
      </button>
      <button onClick={handleSignIn} disabled={loading}>
        Sign In
      </button>
        </div>
        </>
  )
}

export default SignUp