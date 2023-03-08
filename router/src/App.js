import * as React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"
import User from "./components/User"


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello, React Router!</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to ="/">Home</Link>
              </li>
              <li>
              <Link to ="/About">About</Link>
              </li>
              <li>
              <Link to ="/Users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
     
        <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Users" element={<Users/>} />
        <Route path="/" element={<Home />} />
        <Route path="/User/:id" element={<User/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;