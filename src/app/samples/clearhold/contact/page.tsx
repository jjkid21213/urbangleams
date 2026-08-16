import styles from "../ch.module.css";
import { ClearholdFaq, QuoteTicket } from "../ui";

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <p className={styles.kicker}>Contact</p>
      <h2>Work emails only</h2>
      <p className={styles.lede}>
        A real desk would take a work domain and a callback. This sample does not collect them. Log a ticket if you
        want to see the UI. For a product site like this: justinbusiness124@gmail.com · 0494300150
      </p>
      <div className={styles.grid2} style={{ marginTop: "1rem" }}>
        <QuoteTicket />
        <div>
          <h2>Straight answers</h2>
          <ClearholdFaq />
        </div>
      </div>
    </section>
  );
}
