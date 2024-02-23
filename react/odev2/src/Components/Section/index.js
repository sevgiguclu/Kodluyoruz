import React from 'react'

function Section({view,changeList,changeListArray}) {

  const deleteItem = (e) => {
    const deleteItemText = e.target.previousSibling.innerText;
    const updatedToDo = view.filter(item => item.text !== deleteItemText);

    changeList(updatedToDo);
    changeListArray(updatedToDo);
  }
  
  const checkFunction = (e) => {
    // console.log(e);
    const itemText = e.target.nextElementSibling.innerText;
    const itemForUpdate = view.map( item => 
      item.text === itemText ? {...item, done: !item.done } : item
    );
    
    changeList(itemForUpdate);
    changeListArray(itemForUpdate);

  }

  const toggleAll = (e) => {
    const checkStatus = e.target.previousElementSibling.checked;
    if(checkStatus){
      e.target.previousElementSibling.checked = false;
      const toggleList = view.map(item => item.done === false ? item : {...item,done:false});
      changeList(toggleList);
      changeListArray(toggleList);
    }
    else{
      e.target.previousElementSibling.checked = true;
      const toggleList = view.map(item => item.done === true ? item : {...item,done:true});
      changeList(toggleList);
      changeListArray(toggleList);
    }
    
    

    
  }

  return (
    <section className='main'>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={toggleAll}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {view.map((item, i) => (
          item.done ? 
          <li className="completed" key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" onChange={checkFunction} checked={item.done} />
                <label>{item.text}</label>
                <button className="destroy" onClick={deleteItem}></button>
              </div>
          </li> :
          <li key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" onChange={checkFunction} checked={item.done}/>
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