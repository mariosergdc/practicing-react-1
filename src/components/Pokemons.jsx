import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import "./Pokemons.css";
const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = () => {
      fetch(" https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setPokemons(data.results);
        });
    };
    getPokemons();
  }, []);
  return (
    <main>
      <h1>Pokemons</h1>
      <div>List of Pokemons</div>
      <div className="pokemons-list">
        {pokemons.map((pok) => {
          return <Pokemon key={pok.name} pok={pok} />;
        })}
      </div>
    </main>
  );
};

export default Pokemons;
