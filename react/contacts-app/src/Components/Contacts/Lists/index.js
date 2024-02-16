import {useState} from 'react'

function List({contactsArray}) {
  const [filterText,setFilterText] = useState('');
  const filtered = contactsArray.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
    })
  }

  )
  return (
    <div>
      <h2>Contacts</h2>
      <input placeholder='Filter' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
      <ul className='list'>
        {
          filtered.map((contact,i) => 
            <li key={i}>
              <span>{i+1} : {contact.name}</span>
              <span>{contact.phone} </span>
            </li>
          )
        }
      </ul>
      <p>Number Of Items : {filtered.length}</p>
    </div>
  )
}

export default List