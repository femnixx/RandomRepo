import { supabase } from "../SupabaseClient"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RescueAnimal = () => {
  const [image, setImage] = useState<any[]>([]) // store image files
  const [error, setError] = useState<string | null>(null)
  useEffect( () => {
    const DisplayImage = async () => {
      const { data, error } = await supabase
      .storage
      .from('animals')
      .list('cities', {
        limit: 2,
        offset: 0,
        sortBy: { column: 'name', order:'asc'}
      })

      if (error) {
        console.error(error)
      } else {
        setImage(data)
      }
    }
    DisplayImage()
  }, [])

  return (
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {image.map((img) => (
          <li key={img.name}>{img.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RescueAnimal