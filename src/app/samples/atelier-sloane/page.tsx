import Link from "next/link";
import styles from "./as.module.css";

export default function SloaneHome() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Cloth that hangs like it was cut in the room.</h1>
        <p className={styles.note}>
          A small Fitzroy studio. Two collections a year. Nothing on a countdown clock.
        </p>
      </section>
      <div className={styles.strip}>
        <div className={styles.piece}>
          <h2>Wool</h2>
          <p className={styles.note}>Coats that close without a fight.</p>
        </div>
        <div className={styles.piece}>
          <h2>Linen</h2>
          <p className={styles.note}>Summer, if Melbourne allows it.</p>
        </div>
        <div className={styles.piece}>
          <h2>By appointment</h2>
          <p className={styles.note}>
            <Link href="/samples/atelier-sloane/visit">Book the studio →</Link>
          </p>
        </div>
      </div>
    </>
  );
}
