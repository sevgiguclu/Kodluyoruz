import React from 'react'

function Footer({todo, forFilterArray,changeForFilterArray}) {

  const filterSelected = (e) => {
    e.preventDefault();
    const filterName = e.target.name;
    if(filterName === 'active'){
      forFilterArray = todo.filter(item => !item.done);
    }
    else if(filterName === 'completed'){
      forFilterArray = todo.filter(item => item.done);
    }
    else {
      forFilterArray = todo;
    }
    changeForFilterArray(forFilterArray);
  }
  
  return (
    <footer className='footer'>
      <span className="todo-count">
        <strong>4</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" name="all" className="selected" onClick={filterSelected}>All</a>
        </li>
        <li>
          <a href="#/" name="active" onClick={filterSelected}>Active</a>
        </li>
        <li>
          <a href="#/" name="completed" onClick={filterSelected}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer