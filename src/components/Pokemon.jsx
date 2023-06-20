import { useEffect, useState } from "react";

const Pokemon = ({ pok }) => {
  const [pokemon, setPokemon] = useState({ name: "", url: "" });
  const [img, setImg] = useState("");

  useEffect(() => {
    const getPokemon = () => {
      fetch(pok.url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.sprites.front_default);
          setImg(data.sprites.front_default);
        });
    };
    getPokemon();
    setPokemon(pok);
  }, [pok]);

  return (
    <>
      <div>Pokemon</div>
      {pokemon.name && <div>{pokemon.name}</div>}
      <img src={img} alt="img" />
    </>
  );
};

export default Pokemon;
