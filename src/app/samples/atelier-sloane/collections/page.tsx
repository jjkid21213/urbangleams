import styles from "../as.module.css";
import { Lookbook } from "../ui";

export default function CollectionsPage() {
  return (
    <section className={styles.section}>
      <h2>This season</h2>
      <p className={styles.note}>
        Three pieces. Hold what you want to try — the list stays on this page. Nothing is sold here.
      </p>
      <Lookbook hold />
    </section>
  );
}
