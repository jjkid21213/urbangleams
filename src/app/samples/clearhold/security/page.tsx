import { ClearShell } from "../ClearShell";
import styles from "../clear.module.css";

export default function SecurityPage() {
  return (
    <ClearShell>
      <div className={styles.page}>
        <h1>Security</h1>
        <p>
          On a live product this page would name the custodian, the audit cadence, and who
          holds keys. This showcase does not invent those facts.
        </p>
        <p>
          What it does show: a security page that sounds like an adult wrote it, not a
          marketing intern with a padlock icon.
        </p>
      </div>
    </ClearShell>
  );
}
