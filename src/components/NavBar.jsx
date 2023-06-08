import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/exercise-1">Exercise-1</NavLink>
        </li>
      </ul>
    </nav>
  );
}
