import profilePic from "../assets/profile.jpg";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={profilePic}
        alt="Profile Photo"
      ></img>
      <h2 className={styles.cardTitle}>Edward Chia</h2>
      <p className={styles.cardText}>
        Frontend development using HTML, CSS, JavaScript, and React.
      </p>
    </div>
  );
}

export default Card;
