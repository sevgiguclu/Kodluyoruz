import React from 'react'

function Section({todo}) {
  console.log({todo});
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
                <button className="destroy"></button>
              </div>
          </li> :
          <li key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{item.text}</label>
                <button className="destroy"></button>
              </div>
          </li>
        ))}
      </ul>

      

    </section >
  )
}

export default Section