import styles from "../styles/HtmlTags.module.scss";

export default function HtmlTags({ tagname, children }) {
  return (
    <div>
      <span className={styles.htmltag}>{`<${tagname || children.type || "p"}>`}</span>
      {children}
      <span className={styles.htmltag}>{`</${tagname || children.type || "p"}>`}</span>
    </div>
  );
}
