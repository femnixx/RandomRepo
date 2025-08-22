import { useNavigate } from "react-router-dom";

const RescueAnimal = () => {
  const navigate = useNavigate();

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
