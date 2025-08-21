import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const FoundAnimal = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const onFilechange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    const formData = new FormData();
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );
    console.log(selectedFile);
    axios.post("api/uploadfile",formData);
  };
  const fileData = () => {
    if (selectedFile) {
      return (
        <p>File successfully uploaded.</p>
      ) 
    }else {
        return (
          <div>
            Something went wrong.
          </div>
        )
      }
  }

  return (
    <div>
      <h2>FoundAnimal</h2>
      <input type="file" onChange={onFilechange} />
      <button onClick={onFileUpload}>Upload</button>
    </div>
  )
}

export default FoundAnimal