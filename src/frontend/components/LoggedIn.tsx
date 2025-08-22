import React, { useEffect } from 'react'
import { supabase } from '../../SupabaseClient'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const LoggedIn = () => {
    const [username, setUsername] = useState('Guest');
    const navigate = useNavigate();
    const [rescue, setRescue] = useState(0);

    useEffect(() => {
        const handleSession = async () => {
        const { data: sessionData, error } = await supabase.auth.getSession();
        if (sessionData.session) {
            const user = sessionData.session.user;
            const userID = user.id
            setUsername(user.user_metadata.username);
            
            // set rescues
            const { data: userData, error } = await supabase
                .storage
                .from('users')
                .list(userID + "/", {
                    limit:100,
                });
            if (error) {
                console.error(error)
            } else {
                console.log(userData)
                setRescue(userData.length)
            }
                
        } else {
            console.error(error);
        }
    };
    handleSession();
    }, []); // only run once after first render;
    
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
            console.log(username); // check if username still is the same as session data
            navigate('/loggedin');
        } else {
            console.log("Successfully signed out.")
            navigate('/login');
        }
    }
  return (
    <div>
        <p>Hi there, welcome {username}</p>
        <p>Current rescues: {rescue}</p>
        
        <div className='flex flex-col justify-start w-fit gap-y-5 py-3 ps-3'>
            <Link to="/rescued" className='hover:cursor-pointer'>Rescue An Animal</Link>
            <Link to="/found" className='hover:cursor-pointer'>Found An Animal</Link>
        </div>
        
        
        <button className='border-1 px-2 hover:cursor-pointer' onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default LoggedIn