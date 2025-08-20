import { supabase } from "../SupabaseClient"

const RescueAnimal = () => {
  const listFiles = async () => {
    const { data, error } = await supabase
    .storage
    .from('animals')
    .list('cities', {
      limit:100,
      offset:0,
      sortBy: { column: 'name', order: 'asc'},
    })
  }
  return (
    <div>
      <p>RescueAnimal</p>
      <p>List Images:</p>
      
    </div>
  )
}

export default RescueAnimal
