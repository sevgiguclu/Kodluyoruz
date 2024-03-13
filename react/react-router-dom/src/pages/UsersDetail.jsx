import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function UsersDetail() {
  const {id} = useParams();
  const [userData,setUserData] = useState();
  // console.log(id);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users/" + id)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(json => setUserData(json))

  },[id])


  return (
    <div>
      <h3>UsersDetail</h3>

      {
        JSON.stringify(userData)
      }
     <br />
     <Link to={`/users/${Number(id) + 1}`}>Sonraki</Link>
    </div>
  )
}

export default UsersDetail