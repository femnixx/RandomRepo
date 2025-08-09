import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type User = {
  id: number;
  name: string;
};

function App() { 
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);
  
  async function getUsers() {
    const { data, error } = await supabase.from("users").select();

    if (error) {
      console.error(error);
    } else if (data) {
      setUsers(data);
    }
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
