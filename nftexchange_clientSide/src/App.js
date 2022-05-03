import logo from "./logo.svg";
import "./App.css";
import { Searchbox } from "./components/searchBar/search";
import { Profile } from "./components/profile/profile";
import { ItemList } from "./components/items/itemList";
import { Nav } from "./components/navbar/navbar";
import { ContractContextProvider } from './contexts/contractsContext'
import { FilterContextProvider } from './contexts/filterTrait'
import {Checkbox} from './components/items/checkinput'
function App() {
  return (
    <div className="App">
      <ContractContextProvider>
        <FilterContextProvider>
      
          <Nav />

          <Profile />

          <ItemList />
          
        </FilterContextProvider>
      </ContractContextProvider>

    </div>
  );
}

export default App;
