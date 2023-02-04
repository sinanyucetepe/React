import { useState } from "react";

function App() {
  const [name, setName] = useState('Sinan');
  const [age, setAge] = useState(26);
  const [friends, setFriends] = useState( [ "Jack", "Jesse"]);
  const [address, setAddress] = useState( {title:'Izmir', zip: 35000 });
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Tom")}> Click to new name </button>
      <button onClick={() => setAge("20")}> Click to return 20s</button>
    
    <hr /> <br /> <br />
    <h2>Friends</h2>
    { 
      friends.map((friend, index) => (
        <div key={index}> {friend}</div> 
      ))}
      
      <br />

      <button onClick={() => setFriends([ "Jany", ...friends])}> Add a new friend</button> 
      {/* // protect your data previous */}
   
      <hr /> 
      <br /> <br />
      <h2> Address</h2>
      <div>{address.title} {address.zip}</div>  
   
      <br />

      <button onClick={() => setAddress({...address, title: 'Istanbul ', zip:34000})}> Change city</button> 


    </div>
  );
}

export default App;
