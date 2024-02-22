import React from 'react'

function Footer({todo, changeToDo, forFilterArray,changeForFilterArray,count}) {

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

  const doneList = todo.filter(item => item.done);

  const deleteDoneList = (e) => {
    const deleteList = todo.filter(item => !item.done);
    console.log(deleteList);
    changeToDo(deleteList);
    changeForFilterArray(deleteList);
  }
  
  return (
    <footer className='footer'>
      <span className="todo-count">
        <strong>{count}</strong> items left
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

      <button className="clear-completed" onClick={deleteDoneList}>
        {doneList.length > 0 ? 'Clear completed' : ''}
      </button>
    </footer>
  )
}

export default Footer