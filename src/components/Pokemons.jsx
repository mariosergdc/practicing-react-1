import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import "./Pokemons.css";
const LIMIT = 10;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      fetch(
        ` https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${
          page * LIMIT
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setPokemons([...pokemons, ...data.results]);
          setLoading(false);
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
        {pokemons.map((pok, key) => {
          return <Pokemon key={key} pok={pok} />;
        })}
      </div>
      <div>
        {loading && <div style={{ backgroundColor: "red" }}>Loading...</div>}
      </div>
    </main>
  );
};

export default Pokemons;
