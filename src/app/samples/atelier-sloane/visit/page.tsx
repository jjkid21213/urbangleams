import styles from "../as.module.css";

export default function VisitPage() {
  return (
    <section className={styles.section}>
      <h2>The studio</h2>
      <p className={styles.note}>
        Brunswick Street, up the stairs. Thursday and Friday, late morning. This page does not
        take a real booking.
      </p>
      <p className={styles.note} style={{ marginTop: "1.2rem" }}>
        Bring the thing that doesn’t fit. We’ll talk about whether we can cut around it.
      </p>
    </section>
  );
}
