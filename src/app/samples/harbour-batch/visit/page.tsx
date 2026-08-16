import styles from "../hb.module.css";
import { IconPin } from "../icons";
import { HoursWidget, VisitMap } from "../ui";

export default function VisitPage() {
  return (
    <section className={styles.section} style={{ paddingTop: "2rem" }}>
      <h2>Visit</h2>
      <p className={styles.lede}>
        Howard Smith Wharves, Brisbane. If you can see the Story Bridge dead-on, you’re close. Walk in from the
        boardwalk, not the car park stairs if you’ve got a pram.
      </p>
      <div className={styles.grid2} style={{ marginTop: "1.2rem" }}>
        <HoursWidget />
        <div className={styles.card}>
          <p className={styles.iconRow}>
            <IconPin />
            <strong>On the ground</strong>
          </p>
          <ul className={styles.hours} style={{ marginTop: "0.8rem" }}>
            <li>
              <span>Coffee bookings</span>
              <span>No</span>
            </li>
            <li>
              <span>Prams</span>
              <span>Yes</span>
            </li>
            <li>
              <span>Dogs</span>
              <span>Deck only</span>
            </li>
            <li>
              <span>Cards</span>
              <span>Yes — showcase only</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <VisitMap />
      </div>
      <p className={styles.hand} style={{ marginTop: "1rem" }}>
        Map is a pattern, not Google. A live site would embed the real pin.
      </p>
    </section>
  );
}
