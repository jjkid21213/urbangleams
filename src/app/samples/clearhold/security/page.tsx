import styles from "../ch.module.css";
import { IconLock, IconShield } from "../icons";

export default function SecurityPage() {
  return (
    <section className={styles.section}>
      <p className={styles.kicker}>Security</p>
      <h2>How a serious desk talks — without fake badges</h2>
      <p className={styles.lede}>
        A live product would name the custodian and the audit. This showcase does not invent those. No padlock
        clip-art. No ISO sticker we didn’t earn.
      </p>
      <div className={styles.matrix} style={{ marginTop: "1rem" }}>
        <div>
          <strong>
            <IconLock style={{ width: 14, height: 14, marginRight: 6, verticalAlign: "middle" }} />
            Keys
          </strong>
          <p>Two people to release. Policy is the product, not a slogan.</p>
        </div>
        <div>
          <strong>
            <IconShield style={{ width: 14, height: 14, marginRight: 6, verticalAlign: "middle" }} />
            Access
          </strong>
          <p>Work emails. No consumer login on this sample.</p>
        </div>
        <div>
          <strong>Reporting</strong>
          <p>CSV and a memo a board can read. Not a neon dashboard of fake yield.</p>
        </div>
        <div>
          <strong>What we won’t print</strong>
          <p>Made-up AUM, fake uptime, or a custodian name we don’t have.</p>
        </div>
      </div>
    </section>
  );
}
