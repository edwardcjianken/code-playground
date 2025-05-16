import Styles from "./LoginPrompt.module.css";

function LoginPrompt(props) {
  return props.isLoggedIn ? (
    <h1>Welcome to Super Grocery!</h1>
  ) : (
    <h1>Please login to continue</h1>
  );
}

export default LoginPrompt;
