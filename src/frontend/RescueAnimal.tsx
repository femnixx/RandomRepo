import { useState } from "react"
import { supabase } from "../SupabaseClient"
import { useEffect } from "react";
const RescueAnimal = () => {
  type ImageFile = {
    name: string;
    url: string;
  };
  const [images, setImages] = useState<ImageFile[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const folder = "cities";
  const bucket = "animals";
  
  const listFiles = async () => {
    setErrorMsg(null);

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
      setErrorMsg(error.message);
      return;
    } 
    // keep only images (bymimetype or file extension fallback) 
    const imageItems = (data ?? []).filter(
      (f: any) => 
        f?.metadata?.mimetype?.startsWith?.("image/") || 
      /\. (png | jpe?g|gif|webp|bmp|svg)$/i.test(f?.name)
    );
    if (imageItems.length === 0) {
      setImages([]);
      return;
    }
    // 3) build full storage paths for each file
    const paths = imageItems.map((f) => `${folder}/${f.name}`);

    // $)  
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
            <p>{img.url}</p>
            <img src={img.url} alt={img.name} className="w-40 h-40 object-cover"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RescueAnimal
