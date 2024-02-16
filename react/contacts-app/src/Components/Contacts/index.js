import {useState,useEffect} from 'react'
import List from './Lists'
import Form from './Form'
import './style.css'

function Contacts() {
    const [contacts,setContacts] = useState([
        {name:'Sevgi',phone:32},
        {name:'Berkay',phone:24},
        {name:'Ruhiye',phone:11},
        {name:'Arzu',phone:97},
        {name:'Berat',phone:67}
    ]);
    useEffect(()=>{
        console.log(contacts);
    },[contacts]);

    return (
        <div id='container'>
            <List contactsArray={contacts}/>
            <Form addLastItem={setContacts} formContacts={contacts}/>

        </div>

    )
}

export default Contacts