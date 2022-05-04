import logo from "./logo.svg";
import "./App.css";

import { Nav } from "./components/navbar/navbar";
import {Router} from "./routes/router"

function App() {
  return (
    <div className="App">
      
      
          <Nav />

         <Router/>

         
       

    </div>
  );
}

export default App;
