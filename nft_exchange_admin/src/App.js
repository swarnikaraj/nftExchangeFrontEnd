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
        if (obj[att[i]["trait_type"]] === undefined) {
          var t = new Array();
          obj[att[i]["trait_type"]] = t;

          t.push(att[i]["value"]);
        } else {
          if (!obj[att[i]["trait_type"]].includes(att[i]["trait_type"])) {
            obj[att[i]["trait_type"]].push(att[i]["trait_type"]);
          }
        }
      }
    }
    console.log(obj)


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
        // console.log(JSON.parse(res.nft[0].tokenURI).attributes);
        parseall(res);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
