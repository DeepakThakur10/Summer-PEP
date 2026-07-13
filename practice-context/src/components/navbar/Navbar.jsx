import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">React App</h2>

      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;