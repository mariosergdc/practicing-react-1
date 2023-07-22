import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercise1 from "../components/Exercise1";
import NavBar from "../components/NavBar";
import Exercise2 from "../components/Exercise2";
import Exercise3 from "../components/Exercise3";
import Counter from "../components/Counter";
import Pokemons from "../components/Pokemons";
import Error404 from "../components/Error404";
import Prueba1 from "../components/Prueba1";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
        <Route path="/prueba-1" element={<Prueba1 />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
