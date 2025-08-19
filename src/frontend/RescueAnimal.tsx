import { supabase } from "../SupabaseClient"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RescueAnimal = () => {
  const [image, setImage] = useState('')
  
  useEffect( () => {
    const DisplayImage = async () => {
      const { data, error } = await supabase
      .storage
      .from('images')
      .list('', {
        limit: 2,
        offset: 0,
        sortBy: { column: 'name', order:'asc'}
      })

      if (error) {
        console.error(error)
      } else {
        // do it here
      }
    }
    DisplayImage()
  }, [])

  return (
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>
      {DisplayImage}
    </div>
  )
}

export default RescueAnimal