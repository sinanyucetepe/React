import { useEffect, useState } from 'react';
import axios from 'axios';
function Users() {
  const [users, setUsers] = useState([]);
  const [isİoading,setIsloading] = useState(true);

  useEffect( ( ) => {
  axios("https://jsonplaceholder.typicode.com/users")
    .then( (res) => {setUsers(res.data)
    setIsloading(false);})
    .catch(e => console.log(e)
    )}, [])

  return (
    <div>
      <h1>Users</h1>
      {isİoading && <div> Loading ...</div>
 }

      {users.map(user => 
        <div key={user.id}>{user.name} </div>)
      }
    </div>
  )
}

export default Users
