import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     
    const handleLogin = async () => {
        let { data, error } = await supabase.auth.signInWithPassword
    }
  
    return (
    <div>
        <div>
            <p>Welcome back</p>
            
        </div>
    </div>
  )
}

export default SignIn