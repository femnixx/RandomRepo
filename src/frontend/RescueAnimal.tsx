import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import { useState } from "react";

const RescueAnimal = () => {
  const navigate = useNavigate();
  
  const handleFileRetrieval = async () => {
    const { data: userData, error: sessionError } = await supabase.auth.getSession()
     if (data.session) {
      const userID = userData.session?.user.id;
      
      const { data: listUserItems, error: listError } = await supabase
        .storage
        .from('users')
        .list(userID + '/', {
          limit:100,
          offset:0,
          sortBy: { column: "name", order: "asc"},
        })

     } else {
      console.error(sessionError)
     }
  } 

  const handleNavigation = () => {
    navigate('/')
  }
 
  return (
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>
      
      <button onClick={handleNavigation} className="flex mt-5 px-2 py-2 border-1">Return to landing page</button>
    </div>
  )
}

export default RescueAnimal
