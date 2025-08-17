import '../App.css';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../SupabaseClient';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const sessionCheck = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/loggedin')
      } else {
        console.log(error)
      }
    };

    sessionCheck();
  }, []);

    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error)
      } else {
        navigate("/login");
      }
    }


  return (
    <>
      <div>
        <p>Landing Page</p>
        
        <div className='flex flex-col mt-5 gap-y-3'>
          <Link to="/login" className='w-fit'>Login</Link>
          <Link to="/signup" className='w-fit'>Signup</Link>

          {name ? <button className='hover:cursor-pointer'onClick={handleSignOut} >Sign out</button>: null}
        </div>
      </div>
    </>
  );
}

export default App;
