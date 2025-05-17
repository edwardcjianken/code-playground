import Styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p>{new Date().getFullYear()} &copy; Super Grocer Sdn Bhd</p>
    </footer>
  );
}

export default Footer;
