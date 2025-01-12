import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Button;
