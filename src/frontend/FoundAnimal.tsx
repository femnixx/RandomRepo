import React from 'react'
import { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { useNavigate } from 'react-router-dom'
import { toByteArray } from 'base64-js'
import * as FileSystem from "expo-file-system";

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
      console.error("No file selected!");
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
      });
    if (error) {
      console.error('Uploade error:', error);
    } else {
      console.log("File uploaded:", data)
    }
  };
    
  return (
    <div>
      <h2>FoundAnimal</h2>
      <div className='flex flex-col'>
        <input type="file" onChange={onFilechange} />
        <button onClick={onFileUpload} className='flex pt-5'>Upload</button>
        <div className='flex flex-col'>

        </div>
      </div>
    </div>
  )
}

export default FoundAnimal