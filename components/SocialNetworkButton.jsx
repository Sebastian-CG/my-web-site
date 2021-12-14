import PropTypes from "prop-types";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import styles from "../styles/SocialNetworkButton.module.scss";

export default function SocialNetworkButton({ url, iconName, name }) {
  return (
    <a className={styles.link} href={url} target="_blank" rel="noreferrer">
      {iconName === "linkedin" && <AiFillLinkedin />}
      {iconName === "twitter" && <AiOutlineTwitter />}
      {iconName === "github" && <AiFillGithub />}
      {iconName === "gmail" && <IoMail />}
      <span className={styles.name}>{name}</span>
    </a>
  );
}

SocialNetworkButton.propTypes = {
  url: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf(["linkedin", "twitter", "github", "gmail"]),
  name: PropTypes.string.isRequired,
};
