import { NavLink } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import { useAppSelector } from "../store/hooks";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const selectedCar = useAppSelector((state) => state.booking.selectedCar);

  return (
    <header className="navbar">
      <h2 className="brand">
        Rent<span>Ride</span>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/fleet">Our Fleet</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/booking">
              Booking
              {selectedCar && <span className="nav-dot" />}
            </NavLink>
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
