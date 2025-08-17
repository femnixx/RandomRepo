import '../App.css';
import { Link } from 'react-router-dom';
import { supabase } from '../SupabaseClient';
import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';

function App() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const sessionCheck = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        const user = data.session.user;
        setName(user?.user_metadata?.username ?? "Guest");
      }
    };

    sessionCheck();
  }, []);

  return (
    <>
      <div>
        <p>Landing Page</p>
        <p>Current logged in as: {name || "No one"}</p> {/* ✅ render state here */}
        
        <div className='flex flex-col mt-5 gap-y-3'>
          <Link to="/login" className='w-fit'>Login</Link>
          <Link to="/signup" className='w-fit'>Signup</Link>
        </div>
      </div>
    </>
  );
}

export default App;
