import {useState} from 'react'

function Header({listArray,addNewItem}) {
  // console.log("vfd",listArray);
  const [newItem,setNewItem] = useState("");
  const [newObject,setObject] =useState({"done": false,"text": ""});
  const changeItem = (e) => {
    setNewItem(e.target.value);
    setObject({...newObject,[e.target.name]:e.target.value});
  }
  const addItem = (e) => {
    e.preventDefault();
    addNewItem([...listArray,newObject]);
    setNewItem("");
    console.log("array",listArray);
  }
  return (
    <header className='header'>
      <h1>todos</h1>
		  <form onSubmit={addItem}>
        <input className="new-todo" name='text' onChange={changeItem} placeholder="What needs to be done?" value={newItem} autoFocus />
      </form>
    </header>
  )
}

export default Header