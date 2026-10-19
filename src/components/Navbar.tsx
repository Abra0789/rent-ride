import { NavLink } from "react-router-dom";
import { useTheme } from "../context/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <h2>RentRide</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/fleet">Fleet</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark mode" : "Light mode"}
      </button>
    </header>
  );
}

export default Navbar;
