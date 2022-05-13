import logo from "./logo.svg";
import "./App.css";

import { Nav } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Router } from "./routes/router";


function App() {
  return (
    <div className="App">
      <Nav />

     

      <Router />

      <Footer />
    </div>
  );
}

export default App;
