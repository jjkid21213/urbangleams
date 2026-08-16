import { ClearShell } from "../ClearShell";
import styles from "../clear.module.css";

export default function ContactPage() {
  return (
    <ClearShell>
      <div className={styles.page}>
        <h1>Contact</h1>
        <p>
          A real desk would take work emails only. This sample does not collect them.
        </p>
        <p>
          If you want a product site like this built, write Justin at justinbusiness124@gmail.com
          or call 0494300150.
        </p>
      </div>
    </ClearShell>
  );
}
