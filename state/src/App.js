import { useState } from "react";

function App() {
  const [name, setName] = useState('Sinan');
  const [age, setAge] = useState(26);
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Tom")}> Click to new name </button>
      <button onClick={() => setAge("20")}> Click to return 20s</button>
    </div>
  );
}

export default App;
