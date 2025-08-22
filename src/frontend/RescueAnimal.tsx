import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";

const RescueAnimal = () => {
  const navigate = useNavigate();

  const handleFileRetrieval = async () => {
    const { data: userData, error: sessionError } = await supabase.auth.getSession()
     if (data.session) {
      const user = userData.session?.user.id;

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
