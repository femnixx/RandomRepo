import React from 'react'
import { supabase } from '../../SupabaseClient'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoggedIn = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSession = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (data.session) {
            const user = data.session.user;
            setUsername(user.user_metadata.username);
        } else {
            console.error(error);
        }
    }
  return (
    <div>
        <p>Hi there, welcome ${username}</p>
    </div>
  )
}

export default LoggedIn