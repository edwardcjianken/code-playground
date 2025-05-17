import Styles from "./Hero.module.css";
import HeroImage from "../assets/HeroImage.jpg";

function Hero() {
  return (
    <section>
      <img src={HeroImage} alt="Fruits and vegetables on shelf"></img>
    </section>
  );
}

export default Hero;
