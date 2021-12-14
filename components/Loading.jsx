import styles from "../styles/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <span className={styles.description}>Loading...</span>
    </div>
  );
}
