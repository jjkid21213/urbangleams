import Link from "next/link";
import styles from "./as.module.css";

export default function SloaneHome() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Cut slow. Sell fewer.</h1>
        <p className={styles.note}>
          One collection a season. No countdown timers. Clothes you’d actually wear to the studio.
        </p>
        <Link href="/samples/atelier-sloane/collections" className={styles.note} style={{ textDecoration: "underline" }}>
          This season
        </Link>
      </section>
      <div className={styles.strip}>
        <div className={styles.piece}>
          <h2>The coat</h2>
          <p>Unlined wool. Pockets for a book.</p>
        </div>
        <div className={styles.piece}>
          <h2>The dress</h2>
          <p>One length. Two colours.</p>
        </div>
        <div className={styles.piece}>
          <h2>The shirt</h2>
          <p>Heavy linen. Don’t panic-wash it.</p>
        </div>
      </div>
    </>
  );
}
