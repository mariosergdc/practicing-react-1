import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercise1 from "../components/Exercise1";
import NavBar from "../components/NavBar";
import Exercise2 from "../components/Exercise2";
import Exercise3 from "../components/Exercise3";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
