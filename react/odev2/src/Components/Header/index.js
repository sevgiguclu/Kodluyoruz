import {useState} from 'react'

function Header() {
  const [newItem,setNewItem] = useState("");
  const changeItem = (e) => {
    setNewItem(e.target.value);
  }
  const addItem = (e) => {
    e.preventDefault();
    setNewItem(newItem);
  }
  return (
    <header className='header'>
      <h1>todos</h1>
		  <form onSubmit={addItem}>
        <input className="new-todo" onChange={changeItem} placeholder="What needs to be done?" value={newItem} autoFocus />
      </form>
    </header>
  )
}

export default Header