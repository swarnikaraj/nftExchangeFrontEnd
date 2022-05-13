import logo from "./logo.svg";
import "./App.css";

import { Nav } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Router } from "./routes/router";
import { Ghost } from "./components/home/ghost";

function App() {
  return (
    <div className="App">
      <Nav />

      <Ghost />

      <Router />

      <Footer />
    </div>
  );
}

export default App;
