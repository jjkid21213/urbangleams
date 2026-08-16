import Link from "next/link";
import styles from "./hb.module.css";

export default function HarbourBatchHome() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Coffee for people who still look at the river.</h1>
        <p className={styles.lede}>
          We burn the first batch on purpose. The second one is the one we serve.
          If you need a table for a two-hour standup, this is not that room.
        </p>
        <Link href="/samples/harbour-batch/menu" className={styles.btn}>
          Today’s board
        </Link>
      </section>
      <section className={styles.section}>
        <h2>How it runs</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Tue–Sat 6:30–2. Sunday if the machine behaves. Monday we don’t.</p>
          </div>
          <div className={styles.card}>
            <p>Two seats on the water. First come. Don’t reserve them with a tote.</p>
          </div>
        </div>
      </section>
    </>
  );
}
