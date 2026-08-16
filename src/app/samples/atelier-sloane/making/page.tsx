import styles from "../as.module.css";

export default function MakingPage() {
  return (
    <section className={styles.section}>
      <h2>How a piece leaves</h2>
      <p className={styles.note}>
        Pattern on paper. A toile. Then cloth. One person on the machine, one on the finish. We
        don’t photograph every seam for a feed. If you want to see it, come in.
      </p>
      <p className={styles.note} style={{ marginTop: "1.5rem" }}>
        Names on this sample are invented. There is no “Maria in the workroom.”
      </p>
    </section>
  );
}
