import styles from "../as.module.css";

export default function CollectionsPage() {
  return (
    <section className={styles.section}>
      <h2>Collections</h2>
      <div className={styles.row}>
        <span>Coat</span>
        <span>Wool</span>
      </div>
      <div className={styles.row}>
        <span>Dress</span>
        <span>Two colours</span>
      </div>
      <div className={styles.row}>
        <span>Shirt</span>
        <span>Linen</span>
      </div>
    </section>
  );
}
