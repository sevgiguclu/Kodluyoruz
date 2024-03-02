import {useEffect,useState} from 'react'

function Users() {
  const [userList,setUserList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUserList(data))
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  },[]);

  return (
   <>
    <h2>User Fetch</h2>
    <p>{isLoading && <span>Loading...</span>}</p>
    <ul>
      {
        userList.map((item) => 
          <li key={item.id}>{item.name}</li>
        
        )
      }
    </ul>
    
   </>
    
  )
}

export default Users