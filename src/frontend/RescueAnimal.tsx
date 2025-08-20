import { useState } from "react"
import { supabase } from "../SupabaseClient"
import { useEffect } from "react";
const RescueAnimal = () => {
  type ImageFile = {
    name: string;
    url: string;
  };
  const [images, setImages] = useState<ImageFile[]>([]);
 
  
  const listFiles = async () => {
    const { data, error } = await supabase
    .storage
    .from('animals')
    .list('cities', {
      limit:100,
      offset:0,
      sortBy: { column: 'name', order: 'asc'},
    });

    if (error) {
      console.error('Error listing files: ', error.message);
      return;
    }   
    if (data) {
      // convert file names into public URLs
      const urls = data.map((file) => {
        const { data: publicUrl } = supabase.storage
          .from("animals")
          .getPublicUrl(`cities/${file.name}`);
        return {
          name: file.name,
          url: publicUrl.publicUrl,
        };
      });
      setImages(urls);
    }
  };
  // Run listFiles once when componen mounts
  useEffect(() => {
    listFiles();
  }, []);

  return (
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.name} className="border p-2">
            <p>{img.name}</p>
            <img src={img.url} alt={img.name} className="w-40 h-40 object-cover"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RescueAnimal
