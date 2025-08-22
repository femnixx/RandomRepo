import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { User } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import { decode } from 'base64-arraybuffer'

const FoundAnimal = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();     
  const onFilechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ( event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onFileUpload = async () => {
    
    if (!selectedFile ) {
      console.error("No file selected");
      return;
    } 
    // get current user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      console.error("No user session found, please log in.")
      navigate('/login');
      return;
    }
    // use the selected file directly
    const { data, error } = await supabase
      .storage
      .from("users")
      .upload(`${user?.id}/${selectedFile.name}`, selectedFile, {
        cacheControl: '3600',
        upsert: false,
      })
  };
    
  return (
    <div>
      <h2>FoundAnimal</h2>
      <div className='flex flex-col'>
        <input type="file" onChange={onFilechange} />
        <button onClick={onFileUpload} className='flex pt-5'>Upload</button>
      </div>
    </div>
  )
}

export default FoundAnimal