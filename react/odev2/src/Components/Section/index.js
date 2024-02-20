import React from 'react'

function Section({todo,changeList}) {
  // console.log({todo});
  const deleteItem = (e) => {
    console.log("todo:",todo);
    const deleteItemText = e.target.previousSibling.innerText;
    const updatedToDo = todo.filter(item => item.text !== deleteItemText);
    changeList(updatedToDo);
    console.log("todo:",updatedToDo);
  }
  return (
    <section className='main'>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {todo.map((item, i) => (
          item.done ? 
          <li className="completed" key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{item.text}</label>
                <button className="destroy" onClick={deleteItem}></button>
              </div>
          </li> :
          <li key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{item.text}</label>
                <button className="destroy" onClick={deleteItem}></button>
              </div>
          </li>
        ))}
      </ul>

      

    </section >
    
  )
}

export default Section