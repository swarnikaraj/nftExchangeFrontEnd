import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [arr1, setArr1] = useState([]);
  var att;

  function parseall(arr) {
    let obj = {};
    var count = 'count'
    var trait = 'trait'
    for (let j = 0; j < arr.nft.length; j++) {
      att = JSON.parse(arr.nft[j].tokenURI).attributes;
      for (let i = 0; i < att.length; i++) {
        var traits = att[i].trait_type
        if (obj[traits] === undefined) {
          obj[traits] = []
        }
        var found = (obj[traits]).findIndex(x => x.trait === att[i].value);
        if (found == -1) {
          var newobj = {}
          newobj[trait] = att[i].value
          newobj[count] = 1
          obj[traits].push(newobj)
        } else {
          obj[traits][found][count] = obj[traits][found][count] + 1
        }
      }
    }
    console.log(obj)

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('http://localhost:1234/contract/update/0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));


    setArr1(arr);
  }

  // fetch("http://localhost:1234/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(
  //         req.body),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res, " I am a post request response");
  //
  //      });

  useEffect(() => {
    fetch(
      "http://localhost:1234/nft/all/0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB"
    )
      .then((res) => res.json())
      .then((res) => {
        parseall(res);
      });
  }, []);

  return <div className="App">



  </div>;
}

export default App;
