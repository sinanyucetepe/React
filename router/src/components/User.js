import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'

function User() {
    const [user, setUsers] = useState({});
    
    const { id } = useParams(); 

    const [loading, setLoading] =useState(true);


    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUsers(res.data ) )
        .finally(() => setLoading(false))
    },[id])

  return (
    <div>
      <h1>User Detail </h1>
      {loading && <div>loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>} <br /><br />
    <Link to={`/user/${parseInt(id) + 1} `}> Next User ({parseInt(id)+1})</Link>
    </div>
  );
}

export default User
