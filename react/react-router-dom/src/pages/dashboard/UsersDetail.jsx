import { useEffect, useState } from "react";
import { Link, useParams,useLocation } from "react-router-dom"

function UsersDetail() {
  const {id} = useParams();
  const location = useLocation();
  // const [userData,setUserData] = useState();
  const [userData,setUserData] = useState(location.state);

  // console.log("location",location.state);
  // console.log("userData",userData);

  useEffect(() => {
    console.log(id);
    if(!location.state){
       // fetch("https://jsonplaceholder.typicode.com/users/" + id)
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => setUserData(json))
    }
  },[id])


  return (
    <div>
      <h3>UsersDetail</h3>

      {/* {
        JSON.stringify(userData)
      } */}

      {userData && JSON.stringify(userData,null,2)}
     <br />
     <Link to={`/users/${Number(id) + 1}`}>Sonraki</Link>
    </div>
  )
}

export default UsersDetail