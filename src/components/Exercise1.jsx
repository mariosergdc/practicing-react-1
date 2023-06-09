import { useEffect, useState } from "react";

export default function Exercise1() {
  const [fact, setFact] = useState("");

  const getCat = () => {

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