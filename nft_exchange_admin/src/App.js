import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [arr1, setArr1] = useState([]);
  var att;
  let obj = {};

  function parseall(arr) {
    for (let j = 0; j < arr.nft.length; j++) {
      att = JSON.parse(arr.nft[j].tokenURI).attributes;
      for (let i = 0; i < att.length; i++) {
        var traits = att[i].trait_type
        if (obj[traits] === undefined) {
          obj[traits] = []
        }
        var found = (obj[traits]).includes(att[i].value);
        if (!found) {
          obj[traits].push(att[i].value)
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
