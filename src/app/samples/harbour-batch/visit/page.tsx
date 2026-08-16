import { BatchShell } from "../BatchShell";
import styles from "../batch.module.css";

export default function VisitPage() {
  return (
    <BatchShell>
      <div className={styles.page}>
        <h1>Visit</h1>
        <p className={styles.lede}>
          Corner of the river path, South Bank. If you can see the wheel, you’ve gone too far.
        </p>
        <p>
          No bookings for coffee. If the room is full, take a walk and come back. We would rather
          you sit than hover.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Prams fit. Dogs stay outside. Card is fine. Cash is nicer.
        </p>
      </div>
    </BatchShell>
  );
}
