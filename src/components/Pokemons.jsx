import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
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
    <>
      <h1>Pokemons</h1>
      <div>List of Pokemons</div>
      {pokemons.map((pok) => {
        return <Pokemon key={pok.name} pok={pok} />;
      })}
    </>
  );
};

export default Pokemons;
