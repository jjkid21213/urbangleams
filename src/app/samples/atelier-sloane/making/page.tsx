import styles from "../as.module.css";
import { IconNeedle, IconScissors, IconWindow } from "../icons";

export default function MakingPage() {
  return (
    <section className={styles.section}>
      <h2>Making</h2>
      <p className={styles.note}>
        Cut in Collingwood. Cloth from mills we can name on a real job. This page is process, not stock “woman laughing
        with salad.”
      </p>
      <div className={styles.process}>
        <div className={styles.num}>01</div>
        <div>
          <p className={styles.iconRow} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <IconScissors style={{ width: 20, height: 20 }} />
            Pattern
          </p>
          <p className={styles.note}>The coat is drafted once. We don’t grade it into twelve novelty sizes for a drop.</p>
        </div>
        <div className={styles.num}>02</div>
        <div>
          <p style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <IconNeedle style={{ width: 20, height: 20 }} />
            Cloth
          </p>
          <p className={styles.note}>Wool and linen you can feel. On a live site this is where mill names and photos sit.</p>
        </div>
        <div className={styles.num}>03</div>
        <div>
          <p style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <IconWindow style={{ width: 20, height: 20 }} />
            The room
          </p>
          <p className={styles.note}>Finished pieces hang in Fitzroy. Thursday and Friday, by appointment.</p>
        </div>
      </div>
    </section>
  );
}
