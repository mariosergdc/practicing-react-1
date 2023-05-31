/* import axios from "axios"; */
import { useEffect, useState } from "react";

export default function App() {
  const [fact, setFact] = useState("");

  const getCat = () => {
    /* axios.get("https://catfact.ninja/fact").then((res) => {
      let fact = res.data.fact;
      console.log(fact);
      setFact(fact);
      console.log(fact.split(" ", 3).join(" "));
    }); */

    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((json) => {
        let fact = json.fact;
        console.log(fact);
        setFact(fact);
        console.log(fact.split(" ", 3).join(" "));
      }).catch((err)=>console.error(err));
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="App">
      <h1>My Sandbox</h1>
      <h2>Cat Fact</h2>
      <h3>{fact? fact:null} </h3>
      <h4>{fact?.split(" ", 3).join(" ") || null}</h4>
    </div>
  );
}