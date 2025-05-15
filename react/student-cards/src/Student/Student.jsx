import PropTypes from "prop-types";
import Styles from "./Student.module.css";

function Student({
  profilePhotoSrc,
  name = "N/A",
  age = 0,
  membershipValidity = false,
}) {
  return (
    <div className={Styles.card}>
      <img
        className={Styles.cardPhoto}
        src={profilePhotoSrc}
        alt={`${name}'s Profile Pic`}
      ></img>
      <p className={Styles.cardText}>
        <span className={Styles.bold}>Name: </span>
        {name}
      </p>
      <p className={Styles.cardText}>
        <span className={Styles.bold}>Age: </span>
        {age}
      </p>
      <p className={Styles.cardText}>
        <span className={Styles.bold}>Membership Validity: </span>
        {membershipValidity ? "Active" : "Expired"}
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
