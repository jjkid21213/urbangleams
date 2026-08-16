import styles from "../as.module.css";
import { IconHanger } from "../icons";
import { VisitForm } from "../ui";

export default function VisitPage() {
  return (
    <section className={styles.section}>
      <h2>The studio</h2>
      <p className={styles.note}>
        By appointment, Thursday and Friday. Small room. Come without a posse. Try the coat. Sit. Decide later if you
        want.
      </p>
      <div className={styles.grid3}>
        <div>
          <IconHanger style={{ width: 28, height: 28 }} />
          <p style={{ marginTop: "0.8rem" }}>Fitzroy</p>
          <p className={styles.note}>A real address would go here. This sample does not invent a street number.</p>
        </div>
        <div>
          <p>Thu–Fri</p>
          <p className={styles.note}>Afternoon slots. We are not a Saturday market stall.</p>
        </div>
        <div>
          <p>What to bring</p>
          <p className={styles.note}>The shoes you’ll wear with it. That’s enough.</p>
        </div>
      </div>
      <VisitForm />
    </section>
  );
}
