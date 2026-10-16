import "./Navbar.css";
import logo from "../../assets/logo.png";
 function Navbar() {
  return (
    <nav className="navbar">

      <img src={logo} alt="Hostaro logo" />
      
      <ul className="links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a className="pages" href="/">PAGES</a>
        </li>
        <li>
          <a href="./">CONTACT</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;