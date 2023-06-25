import "./Pokemon.css";
import { useEffect, useState } from "react";

const Pokemon = ({ pok }) => {
  const [pokemon, setPokemon] = useState({ name: "", url: "" });
  const [img, setImg] = useState("");

  useEffect(() => {
    const getPokemon = () => {
      fetch(pok?.url)
        .then((res) => res.json())
        .then((data) => {
          setImg(data.sprites.front_default);
        });
    };
    getPokemon();
    setPokemon(pok);
  }, [pok]);

  return (
    <div className="pokemon-card">
      {pokemon.name && <div>{pokemon.name}</div>}
      <img src={img} alt="img" />
    </div>
  );
};

export default Pokemon;
