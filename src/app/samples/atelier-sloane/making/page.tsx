import { SloaneShell } from "../SloaneShell";
import styles from "../sloane.module.css";

export default function MakingPage() {
  return (
    <SloaneShell>
      <div className={styles.page}>
        <h1>Making</h1>
        <p>
          Cut in Collingwood. Cloth from mills we can name. This page would show process
          photos on a real job — not stock “woman laughing with salad.”
        </p>
      </div>
    </SloaneShell>
  );
}
