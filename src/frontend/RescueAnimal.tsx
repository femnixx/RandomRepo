import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import { useEffect, useState } from "react";

const RescueAnimal = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);

  const handleFileRetrieval = async () => {
    const { data: userData, error: sessionError } = await supabase.auth.getSession()
     if (userData.session) {
      const userID = userData.session?.user.id;
      
      const { data: listUserItems, error: listError } = await supabase
        .storage
        .from('users')
        .list(userID + '/', {
          limit:100,
          offset:0,
          sortBy: { column: "name", order: "asc"},
        });
        if (listError) {
          console.error("Error listing files:", listError);
          return;
        }

        // convert files metadata => signeDUrls
        const signedUrls = await Promise.all(
          listUserItems.map(async (file) => {
            const { data, error } = await supabase.storage
              .from('users')
              .createSignedUrl(`${userID}/${file.name}`, 3600) // in seconds
            if (error) {
              console.error("Error creating signed URL:", error);
              return null;
            }
            return data?.signedUrl || null;
            })
        );

        // 3. save to state (remove nulls)
        setImages(signedUrls.filter(Boolean) as string[]);
     } else {
      console.error(sessionError)
      return;
     }
  } ;

  useEffect(() => {
    handleFileRetrieval();
  }, [])

  const handleNavigation = () => {
    navigate('/')
  }
 
  return(
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>

      {/* fetch images */}
      <div>
        {images.map((url, idx) => {
          return  <img key={idx} src={url} alt="rescue" />
        })}
      </div>
      <button onClick={handleNavigation} className="flex mt-5 px-2 py-2 border-1">Return to landing page</button>
    </div>
  )
}

export default RescueAnimal
