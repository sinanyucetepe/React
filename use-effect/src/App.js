import {useState, useEffect} from "react";
function App() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Sinan");
    useEffect(() => {
      console.log("number state updated")
    }, [number])
    useEffect(() => {
      console.log("name state updated")
    }, [name])

    useEffect ( () => {
      console.log(' component mounted')
    }, [])

    return <div className="App" >
      <h1>{number}</h1>
    <button onClick={() => setNumber(number+1)} > Click </button>
    <hr />
    <h1>{name}</h1>
    <button onClick={() => setName("Tom")} > Click a new name </button>
    </div>
 
}

export default App;
