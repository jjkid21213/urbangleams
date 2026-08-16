import Link from "next/link";
import { BatchShell } from "./BatchShell";
import styles from "./batch.module.css";

export default function HarbourBatchHome() {
  return (
    <BatchShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>South Bank · since this morning</p>
        <h1>Filter coffee, a river, and a sandwich that does not apologise.</h1>
        <p className={styles.lede}>
          We open when the fog lifts. We close when the bread’s gone. If you need
          wifi for six hours, the library is two blocks over.
        </p>
        <Link href="/samples/harbour-batch/menu" className={styles.cta}>
          What’s on today
        </Link>
      </section>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Today</h2>
          <p>Tue–Sat 7–2. Sunday if we feel like it. Monday we rest the machine.</p>
        </div>
        <div className={styles.card}>
          <h2>The river table</h2>
          <p>Two seats. First come. Don’t save them with a bag.</p>
        </div>
        <div className={styles.card}>
          <h2>Catering</h2>
          <p>Office boxes, not weddings. Tell us headcount and dietary notes.</p>
        </div>
      </div>
    </BatchShell>
  );
}
