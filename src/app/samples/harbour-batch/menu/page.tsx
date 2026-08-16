import styles from "../hb.module.css";
import { TrayBar } from "../ui";

export default function MenuPage() {
  return (
    <section className={styles.section} style={{ paddingTop: "2rem" }}>
      <h2>Menu</h2>
      <p className={styles.lede}>
        Short on purpose. Filter by coffee, plates, or weekend. Add a few things to the tray if you want to see how a
        real cafe might take a table order — this showcase does not charge.
      </p>
      <div style={{ marginTop: "1.2rem" }}>
        <TrayBar />
      </div>
    </section>
  );
}
