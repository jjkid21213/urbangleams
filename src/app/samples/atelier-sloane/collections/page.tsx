import { SloaneShell } from "../SloaneShell";
import styles from "../sloane.module.css";

export default function CollectionsPage() {
  return (
    <SloaneShell>
      <div className={styles.page}>
        <h1>Collections</h1>
        <p>Autumn: coat, dress, shirt. We don’t restock the second it sells. That’s the point.</p>
        <p>Sizes 6–18. Alterations at the studio, not a chatbot.</p>
      </div>
    </SloaneShell>
  );
}
