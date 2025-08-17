import React, { useEffect } from 'react'
import { supabase } from '../../SupabaseClient'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoggedIn = () => {
    const [username, setUsername] = useState('Guest');
    const navigate = useNavigate();

    useEffect(() => {
        const handleSession = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (data.session) {
            const user = data.session.user;
            setUsername(user.user_metadata.username);
        } else {
            console.error(error);
        }
    };
    handleSession();
    }, []); // only run once after first render;
    
  return (
    <div>
        <p>Hi there, welcome {username}</p>
    </div>
  )
}

export default LoggedIn