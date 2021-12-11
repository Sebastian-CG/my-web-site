import styles from "../styles/Project.module.scss";
import HtmlTags from "./HtmlTags.jsx";
import LinkButton from "./LinkButton.jsx";
import PhoneFrame from "./PhoneFrame.jsx";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";

export default function Project({
  titleProject,
  description,
  links,
  projectUrl,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.info_container}>
        <div>
          <h3 className={styles.title}>{titleProject}</h3>

          <HtmlTags tagname="description">
            <p className={styles.description}>{description}</p>
          </HtmlTags>
        </div>

        <div className={styles.buttons_container}>
          <LinkButton link={links.view} filling={true}>
            View
            <AiFillEye />
          </LinkButton>

          <LinkButton link={links.code} filling={false}>
            Code
            <SiVisualstudiocode />
          </LinkButton>

          <LinkButton link={links.sourceCode} filling={false}>
            Source Code
            <AiFillGithub />
          </LinkButton>
        </div>
      </div>

      <div className={styles.preview}>
        <PhoneFrame url={projectUrl} />
      </div>
    </section>
  );
}
