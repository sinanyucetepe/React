import { useState, useEffect } from "react";
function App() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Sinan");

    useEffect ( () => {
        console.log(' component mounted')
        setInterval( () => {
        setNumber(()=>number+1)
        },1000)
      }, []);

    useEffect(() => {
      console.log("number state updated")
    }, [number]);

    return (
        <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number+1)} > Click </button>
        </div>
    )
}
export default App;