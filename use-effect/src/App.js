import { useState } from "react";
import Counter from "./componets/Counter";
function App() {
  const [isVisible, setIsVisible]  = useState(true)
  return (
    <div className="App">

    <Counter/>
    <button onClick={()=> setIsVisible(false) }>Toggle</button>
    </div>

  );
}

export default App;
