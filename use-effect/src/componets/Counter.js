import { useState, useEffect } from "react";
function App() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Sinan");

    useEffect ( () => {
       console.log(' component mounted')

        const interval = setInterval( () => {
       setNumber((number)=>number+1)
       },1000);

      return ( ) => clearInterval(interval);
     }, []);
    useEffect(() => {
      console.log("number state updated")
    }, [number]);

    return (
        <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number+1)} > Click </button>
        <button onClick={() => setNumber(0)} > reset </button>
        </div>
    )
}
export default App;