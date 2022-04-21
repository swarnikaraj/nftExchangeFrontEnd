import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [arr1, setArr1] = useState([]);
  var att;
  let obj = {};

  function parseall(arr) {
    for (let j = 0; j < arr.length; j++) {
      att = JSON.parse(arr[j].tokenURI).attributes;

      for (let i = 0; i < att.length; i++) {

        if ( obj[ att[i]["trait_type"]  ] === undefined) {
              var t=new Array()
          obj[att[i]["trait_type"]] = t;
             
          t.push(att[i]["value"])

        } else {

          
                
          obj[att[i]["trait_type"]].push(att[i]["trait_type"]);
        }
      }
    }

    setArr1(arr);
  }

  useEffect(() => {
    fetch(
      "http://127.0.0.1:1234/nft/single/0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB"
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(JSON.parse(res[0].tokenURI).attributes);
        setArr1(res);
      });

    parseall(arr1);
    console.log(obj);
  }, []);

  return <div className="App"></div>;
}

export default App;
