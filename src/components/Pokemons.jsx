import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import "./Pokemons.css";
const LIMIT = 20;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      fetch(
        ` https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${
          page * LIMIT
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setPokemons([...pokemons, ...data.results]);
        });
    };
    getPokemons();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + window.document.documentElement.scrollTop + 1 >=
        window.document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
