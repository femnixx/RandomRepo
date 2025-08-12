import '../App.css';
import { Link } from 'react-router-dom';
function App() { 
  return (
    <>
      <div>
        <p>Landing Page</p>
        <div className='flex flex-col mt-5 gap-y-3'>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}

export default App;
