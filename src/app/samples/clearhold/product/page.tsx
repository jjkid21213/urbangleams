import styles from "../ch.module.css";

export default function ProductPage() {
  return (
    <section className={styles.section}>
      <h2>Product</h2>
      <ul className={styles.list}>
        <li>Request a quote. Lock a spread. Settle to named accounts.</li>
        <li>Not a retail app. Not a yield product. Not a Discord.</li>
        <li>Language you can paste into a board pack.</li>
      </ul>
    </section>
  );
}
