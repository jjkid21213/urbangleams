import { BatchShell } from "../BatchShell";
import styles from "../batch.module.css";

export default function CateringPage() {
  return (
    <BatchShell>
      <div className={styles.page}>
        <h1>Catering</h1>
        <p className={styles.lede}>
          Breakfast boxes for offices along the river. 12 heads minimum. 48 hours notice.
        </p>
        <p>
          This is a showcase, so the form does not send. On a real job it would go to the cafe.
          For Urban Gleams, email justinbusiness124@gmail.com.
        </p>
        <p style={{ marginTop: "1.25rem" }}>Sandwich + fruit + brew · $18 a head</p>
      </div>
    </BatchShell>
  );
}
