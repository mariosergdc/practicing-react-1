import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Hamburger.css";
const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav
        onClick={handleClick}
        className={`menuppal ${open ? "is_active" : ""} `}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/exercise-1">Exercise-1</NavLink>
          </li>
        </ul>
      </nav>
      <div
        onClick={handleClick}
        className={`hamburger ${open ? "is-active" : ""} `}
      >
        <div className="layer top"></div>
        <div className="layer mid"></div>
        <div className="layer bottom"></div>
      </div>
    </div>
  );
};

export default Hamburger;
