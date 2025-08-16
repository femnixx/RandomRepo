import '../App.css';
import { Link } from 'react-router-dom';
import { supabase } from '../SupabaseClient';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        
      }
    }
  })
  
  return (
    <>
      <div>
        <p>Landing Page</p>
        <div className='flex flex-col mt-5 gap-y-3'>
            <Link to="/login" className='w-fit'>Login</Link>
            <Link to="/signup" className='w-fit'>Signup</Link>
        </div>
      </div>
    </>
  );
}

export default App;
