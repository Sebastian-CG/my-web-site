import PropTypes from "prop-types";
import styles from "../styles/PhoneFrame.module.scss";

export default function PhoneFrame({ url }) {
  return <iframe className={styles.phone} src={url} />;
}

PhoneFrame.propTypes = {
  url: PropTypes.string.isRequired,
};
