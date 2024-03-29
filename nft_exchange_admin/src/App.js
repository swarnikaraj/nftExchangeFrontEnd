import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [arr1, setArr1] = useState([]);
  const [address, setAddress] = useState("");
  var att;
  let attributesFinal = [];

  function parseallsecond(arr) {
    let obj = {};
    var count = "count";
    var trait = "trait";
    for (let j = 0; j < arr.nft.length; j++) {
      if (JSON.parse(arr.nft[j].tokenURI) != null) {
        att = JSON.parse(arr.nft[j].tokenURI).attributes;
        for (let i = 0; i < att.length; i++) {
          var traits = att[i].trait_type;
          if (obj[traits] === undefined) {
            obj[traits] = [];
          }
          var found = obj[traits].findIndex((x) => x.trait === att[i].value);
          if (found == -1) {
            var newobj = {};
            newobj[trait] = att[i].value;
            newobj[count] = 1;
            obj[traits].push(newobj);
          } else {
            obj[traits][found][count] = obj[traits][found][count] + 1;
          }
        }
      }
    }

    var keys = "trait_type";
    var trait_type_count = "trait_type_count";
    var value = "traits";
    var keyValueObj = {};

    //let data = Object.entries(obj).map(([key, value]) => ({ [key]: value }));
    for (var key in obj) {
      // console.log(key)
      keyValueObj[keys] = key;
      // console.log(obj[key])
      keyValueObj[value] = obj[key];
      keyValueObj[trait_type_count] = obj[key].length;
      // console.log(keyValueObj)
      attributesFinal.push(JSON.parse(JSON.stringify(keyValueObj)));
    }
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attributesFinal),
    };
    fetch(`http://localhost:1234/contract/update/${address}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArr1(data);
      });
  }

  useEffect(() => {
    setAddress(address);
    console.log(address);
  }, [address]);

  async function addData() {
    console.log(address);

    try {
      var res = await fetch(`http://localhost:1234/nft/all/${address}`);
      var dta = await res.json();
      //console.log(dta)
      parseallsecond(dta);
    } catch (err) {}
  }

  return (
    <div className="App">
      <input
        placeholder="put address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={() => addData()}>mai button hu</button>
    </div>
  );
}

export default App;
