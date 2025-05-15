import PropTypes from "prop-types";

function Student({ name = "Test Name", age = 0, isStudent = false }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>isStudent: {isStudent ? "True" : "False"} </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
