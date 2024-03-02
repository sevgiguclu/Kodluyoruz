import {useEffect,useState} from 'react'

import axios from 'axios'

function Users() {
  const [userList,setUserList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [userPosts,setUserPosts] = useState([]);
  
  useEffect(() => {
    // native fetch 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUserList(data))
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))

    // axios fetch
    axios('https://jsonplaceholder.typicode.com/posts')
    .then((res) => setUserPosts(res.data))
    .catch(e => console.log(e))
    .finally(() => setIsLoading(false))

  },[]);

  return (
   <>
    <h2>User Fetch</h2>
    <p>{isLoading && <span>Loading...</span>}</p>
    <ul className='inlineList'>
      {
        userList.map((item) => 
          <li key={item.id}>{item.name}</li>
        
        )
      }
    </ul>
    <ul className='inlineList'>
      {
        userPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
   </>
    
  )
}

export default Users