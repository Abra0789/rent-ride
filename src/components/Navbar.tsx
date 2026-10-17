import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h2>RentRide</h2>
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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
