import styles from "../styles/Footer.module.scss";
import SocialNetworkButton from "./SocialNetworkButton";

export default function Footer() {
  // Data Social Network
  const dataSN = [
    {
      url: "https://www.linkedin.com/in/luis-sebastian-gonz%C3%A1lez-cordero-abb4b0218/",
      iconName: "linkedin",
      name: "linkedin",
    },
    {
      url: "https://twitter.com/gcc_sebastian",
      iconName: "twitter",
      name: "twitter",
    },
    {
      url: "https://github.com/Sebastian-CG",
      iconName: "github",
      name: "github",
    },
    {
      url: "mailto:sebastiangzzcor@gmail.com",
      iconName: "gmail",
      name: "gmail",
    },
  ];

  return (
    <footer className={styles.footer}>
      {dataSN.map(({ url, iconName, name }, index) => (
        <SocialNetworkButton key={index} url={url} iconName={iconName} name={name} />
      ))}
    </footer>
  );
}
