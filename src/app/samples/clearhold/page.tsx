import Link from "next/link";
import styles from "./ch.module.css";

export default function ClearholdHome() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.kicker}>Treasury · Australia</p>
        <h1>Hold digital assets without turning the homepage into a nightclub.</h1>
        <p className={styles.lede}>
          Clearhold is a sample OTC desk for companies with a board and a policy.
          No mascot. No “wen.” Settlement in business hours.
        </p>
        <Link href="/samples/clearhold/product" className={styles.btn}>
          How the desk works
        </Link>
      </section>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <strong>AU hours</strong>
          <p>Quotes while a bank is actually open.</p>
        </div>
        <div className={styles.stat}>
          <strong>Two keys</strong>
          <p>Approvals with two people. Not one laptop.</p>
        </div>
        <div className={styles.stat}>
          <strong>CSV</strong>
          <p>Reporting a CFO can open. That’s the romance.</p>
        </div>
      </div>
    </>
  );
}
