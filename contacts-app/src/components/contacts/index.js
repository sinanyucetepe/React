import {useState, useEffect} from 'react'
import './styles.css'
import List from './List'
import Form from './Form'
function Contacts() {
  const [contacts, setContacts]  = useState( [
    {
      fullname: "Sinan",
      phone_number: "789789"
    },
    {
      fullname:"Tom",
      phone_number: "456789"
    },
    {
      fullname: "Jean",
      phone_number:"541236"
    }
  ]);

  useEffect( () => {
    console.log(contacts);
  },[contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts= {contacts} />
    </div>
  )
}

export default Contacts;
