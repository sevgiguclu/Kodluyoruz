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
      <input placeholder='Filter' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
      <ul>
        {
          filtered.map((contact,i) => 
            <li key={i}>{i+1} : {contact.name} - {contact.phone} </li>
          )
        }
      </ul>
    </div>
  )
}

export default List