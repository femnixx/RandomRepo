import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { UNSAFE_ErrorResponseImpl, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp =  async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username
        }
      }
    })
    if (error || username == '' || email == '' || password == '') {
      alert(error)
    } else {
      const { data: { user } } = await supabase.auth.getUser();
      window.alert('User signed up as: ' + user?.user_metadata.username)
      navigate('/login');
    }
  }
  return (
    <>
    <form onSubmit={handleSignUp} className='bg-orange-400 h-screen w-auto justify-center items-center flex'>
      <div className='bg-white text-sm -mt-10 rounded-lg text-[#345830]'>
        <h1 className='text-center mt-2'>Register with</h1>
        <div className=' flex justify-center mt-2 w-full items-center'>
          <div className='bg-[#C6ED73]/50 px-5 w-fit rounded-full flex justify-center items-center py-0.5 gap-x-2'>
            <AiFillGoogleCircle className='size-5 bg-white text-red-500 rounded-full'></AiFillGoogleCircle>
            <FaFacebook className='size-4.5 bg-white rounded-full text-blue-700'/>
          </div>
        </div>
        <h1 className='text-center mt-2'>Or fill the registration details</h1>
        <div className="flex flex-col gap-y-3 mt-5 ms-5">
          <p>Username</p>
          <input type="text" className="border-1 w-fit" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="flex flex-col gap-y-3 ms-5">
          <p>Email</p>
          <input type="email" className="border-1 w-fit" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col gap-y-3 ms-5">
          <p>Password</p>
          <input type="password" className="border-1 w-fit" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='border-1 px-2 mt-5 ms-5'>Submit</button>
        <br />
        <Link to="/">LandingPage</Link>
      </div>
    </form>
    </>
  )
}

export default SignUp