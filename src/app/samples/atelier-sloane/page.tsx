import Link from "next/link";
import { SloaneShell } from "./SloaneShell";
import styles from "./sloane.module.css";

export default function SloaneHome() {
  return (
    <SloaneShell>
      <section className={styles.hero}>
        <h1>Cut slow. Sell fewer. No countdown clock.</h1>
        <p className={styles.lede}>
          A sample womenswear site. Linen, wool, and a studio you can actually visit.
          If it looks like every Shopify theme, we did it wrong.
        </p>
        <Link href="/samples/atelier-sloane/collections" className={styles.cta}>
          This season
        </Link>
      </section>
      <div className={styles.strip}>
        <div className={styles.look}>
          <h2>The coat</h2>
          <p>Unlined wool. Pockets you can put a book in.</p>
        </div>
        <div className={styles.look}>
          <h2>The dress</h2>
          <p>One length. Two colours. That’s the drop.</p>
        </div>
        <div className={styles.look}>
          <h2>The shirt</h2>
          <p>Heavy linen. Washes badly if you panic. Don’t panic.</p>
        </div>
      </div>
    </SloaneShell>
  );
}
