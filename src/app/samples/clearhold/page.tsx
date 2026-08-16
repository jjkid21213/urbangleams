import Link from "next/link";
import { ClearShell } from "./ClearShell";
import styles from "./clear.module.css";

export default function ClearholdHome() {
  return (
    <ClearShell>
      <section className={styles.hero}>
        <h1>A desk for companies that hold digital assets and still have a board.</h1>
        <p className={styles.lede}>
          Clearhold is a sample product site for an OTC treasury tool. No rockets. No “wen.”
          Settlement in business hours. Language a CFO can send to legal.
        </p>
        <Link href="/samples/clearhold/product" className={styles.cta}>
          How the desk works
        </Link>
      </section>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Who it’s for</h2>
          <p>Australian companies with a treasury policy, not people chasing a chart.</p>
        </div>
        <div className={styles.cell}>
          <h2>What it isn’t</h2>
          <p>Not a retail app. Not a yield product. Not a Discord.</p>
        </div>
        <div className={styles.cell}>
          <h2>Tone</h2>
          <p>If we wouldn’t put it in a board pack, it doesn’t go on the homepage.</p>
        </div>
      </div>
    </ClearShell>
  );
}
