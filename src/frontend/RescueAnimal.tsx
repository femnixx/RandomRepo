import { supabase } from "../SupabaseClient"
import { useEffect, useState } from "react"

const RescueAnimal = () => {
  const [images, setImages] = useState<string[]>([]) // store image URLs
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      // 1. List files in the "cities" folder
      const { data, error } = await supabase
        .storage
        .from("animals")
        .list("cities", {
          sortBy: { column: "name", order: "asc" },
        })

      if (error) {
        setError(error.message)
      } else if (data) {
        // 2. Build public URLs for each file
        const urls = data.map((file) => {
          const { data: publicUrl } = supabase
            .storage
            .from("animals")
            .getPublicUrl(`cities/${file.name}`)
          return publicUrl.publicUrl
        })

        // 3. Save URLs into state
        setImages(urls)
      }
    }

    fetchImages()
  }, [])

  return (
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul>
        {images.map((url, i) => (
          <li key={i}>
            <img src={url} alt={`animal-${i}`} width={200} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RescueAnimal
