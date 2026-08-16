import Link from "next/link";
import styles from "./ch.module.css";
import { IconCsv, IconKeys, IconLedger, IconVault } from "./icons";
import { Blotter, ProductTabs } from "./ui";

export default function ClearholdHome() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.kicker}>Treasury desk · Australia · showcase</p>
        <h1>Hold digital assets without turning the homepage into a nightclub.</h1>
        <p className={styles.lede}>
          Clearhold is a sample OTC desk for companies with a board and a policy. No mascot. No “wen.” Quotes while a
          bank is actually open. Settlement to named accounts.
        </p>
        <Link href="/samples/clearhold/product" className={styles.btn}>
          <IconLedger style={{ width: 14, height: 14 }} />
          How the desk works
        </Link>
      </section>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <IconVault style={{ width: 18, height: 18 }} />
          <b>AU hours</b>
          <span>09:00–16:00 Sydney. Layout clock, not a live feed.</span>
        </div>
        <div className={styles.stat}>
          <IconKeys style={{ width: 18, height: 18 }} />
          <b>Two keys</b>
          <span>A send needs two people. Not one laptop.</span>
        </div>
        <div className={styles.stat}>
          <IconCsv style={{ width: 18, height: 18 }} />
          <b>CSV</b>
          <span>A file a CFO can open. That’s the romance.</span>
        </div>
        <div className={styles.stat}>
          <b>T+0 / T+1</b>
          <span>Spot crypto same day. Fiat on a bank rail.</span>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.grid2}>
          <div>
            <h2>Sample blotter</h2>
            <p className={styles.lede}>Not a live book. The rows exist so the console has weight.</p>
            <ProductTabs />
          </div>
          <div>
            <h2>Day tape</h2>
            <Blotter />
          </div>
        </div>
      </section>
    </>
  );
}
