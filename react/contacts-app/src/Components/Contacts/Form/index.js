import {useState} from 'react'

function Form({addLastItem,formContacts}) {
    const initialFormValues = {name:'',phone:''};
    const [form,setForm] = useState(initialFormValues);
    const changeInput = (e) => {
        // console.log(e.target);
        setForm({...form,[e.target.name]:e.target.value});
    }
    
    const addItem = (e) => {
        e.preventDefault();//Because the form tag automatically performs "render" in case of "submit".
        if(form.name === '' || form.phone === ''){
            return false;
        }
        addLastItem([...formContacts,form]);
        setForm(initialFormValues);
        console.log(form);
    }


  return (
    <form onSubmit={addItem}>
        <div>
            <input name='name' value={form.name} placeholder='name' onChange={changeInput}></input>
        </div>
        <div>
            <input name='phone' value={form.phone} placeholder='phone' onChange={changeInput}></input>
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form