import Styles from "./Header.module.css";
import GrocerLogo from "../assets/GrocerLogo.png";

function Header() {
  return (
    <header>
      <img src={GrocerLogo}></img>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Fruits</a>
          </li>
          <li>
            <a>Vegetables</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;
