import styles from "../ch.module.css";
import { ProductTabs, QuoteTicket } from "../ui";

export default function ProductPage() {
  return (
    <section className={styles.section}>
      <p className={styles.kicker}>Product</p>
      <h2>Request a quote. Lock a spread. Settle to named accounts.</h2>
      <p className={styles.lede}>
        Not a retail app. Not a yield product. Not a Discord. Language you can paste into a board pack. Use the tabs,
        then log a sample ticket — it stays in the browser.
      </p>
      <div className={styles.grid2} style={{ marginTop: "1rem" }}>
        <ProductTabs />
        <QuoteTicket />
      </div>
    </section>
  );
}
