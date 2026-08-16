import { SloaneShell } from "../SloaneShell";
import styles from "../sloane.module.css";

export default function VisitPage() {
  return (
    <SloaneShell>
      <div className={styles.page}>
        <h1>Visit</h1>
        <p>By appointment, Thursday and Friday. The room is small. Come without a posse.</p>
        <p>
          Showcase only — to get a site like this, email justinbusiness124@gmail.com or call
          0494300150.
        </p>
      </div>
    </SloaneShell>
  );
}
