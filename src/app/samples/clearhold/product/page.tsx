import { ClearShell } from "../ClearShell";
import styles from "../clear.module.css";

export default function ProductPage() {
  return (
    <ClearShell>
      <div className={styles.page}>
        <h1>Product</h1>
        <p>
          Request a quote, lock a spread during AU hours, settle to named accounts. Approvals
          sit with two people at the company — not a single API key on a laptop.
        </p>
        <p>
          Reporting exports to CSV. That’s the whole romance.
        </p>
      </div>
    </ClearShell>
  );
}
