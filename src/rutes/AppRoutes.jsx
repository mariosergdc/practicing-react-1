import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercise1 from "../components/Exercise1";
import NavBar from "../components/NavBar";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/exercise-1" element={<Exercise1 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
