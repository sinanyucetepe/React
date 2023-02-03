import './App.css';
import User from './componets/User';
//import Header from './componets/Header'
const friends = [
  {
    id: 1,
  name:'Jack '
  },
  {
    id: 2,
    name:'Jesse '
  },
  {
    id: 3,
    name:'Ron '
  }, 
];
function App() {
  return(
    <>
    <User name="Sinan" surname = "Yucetepe" isLoggedIn= {true} age={26} friends ={ friends} />

    
    </>
  );
}

export default App