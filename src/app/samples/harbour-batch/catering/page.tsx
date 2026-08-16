import styles from "../hb.module.css";
import { IconBag } from "../icons";
import { CateringForm } from "../ui";

export default function CateringPage() {
  return (
    <section className={styles.section} style={{ paddingTop: "2rem" }}>
      <h2>Catering</h2>
      <p className={styles.lede}>
        Office boxes for a morning meeting. Coffee in a flask, sandwiches that travel, fruit that isn’t sad. Twelve
        heads minimum. Forty-eight hours’ notice. Not weddings, not grazing tables for two hundred.
      </p>
      <div className={styles.grid2} style={{ marginTop: "1.2rem" }}>
        <div className={styles.card}>
          <p className={styles.iconRow}>
            <IconBag />
            <strong>What’s in a box</strong>
          </p>
          <ul className={styles.hours} style={{ marginTop: "0.8rem" }}>
            <li>
              <span>Brew flask</span>
              <span>Yes</span>
            </li>
            <li>
              <span>Milk coffee</span>
              <span>If you ask early</span>
            </li>
            <li>
              <span>Folds and fruit</span>
              <span>Yes</span>
            </li>
            <li>
              <span>Staff on site</span>
              <span>No — drop and go</span>
            </li>
          </ul>
        </div>
        <div className={styles.sheet}>
          <p className={styles.hand}>Write to the kitchen</p>
          <CateringForm />
        </div>
      </div>
    </section>
  );
}
