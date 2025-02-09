import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isOutline: PropTypes.bool,
};

export default Button;
