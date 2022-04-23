import logo from "./logo.svg";
import "./App.css";
import { Searchbox } from "./components/searchBar/search";
import { Profile } from "./components/profile/profile";
import { ItemList } from "./components/items/itemList";
import { Nav } from "./components/navbar/navbar";
function App() {
  return (
    <div className="App">
      <Nav />

      <Profile />

      <ItemList />
    </div>
  );
}

export default App;
