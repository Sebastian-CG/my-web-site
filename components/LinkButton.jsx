import PropTypes from "prop-types";
import styles from "../styles/LinkButton.module.scss";

export default function Button({ link, filling, children }) {
  return (
    <a
      className={`${filling ? styles.filling : styles.unfilled} ${styles.button_link}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

Button.defaultProps = {
  link: PropTypes.string.isRequired,
  filling: PropTypes.bool.isRequired,
};
