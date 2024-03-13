import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Users() {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
      .then(json => setUsers(json))

    // console.log(users);
  },[])

  


  return (
    <>
      <h3>Users</h3>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
    
  )
}

export default Users