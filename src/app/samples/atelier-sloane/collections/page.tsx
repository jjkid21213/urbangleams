import styles from "../as.module.css";

const pieces = [
  ["The long coat", "Wool, charcoal", "Made to order"],
  ["The shirt dress", "Washed linen", "In the studio"],
  ["The evening column", "Silk mix", "Two left"],
  ["The everyday trouser", "Wool blend", "Made to order"],
];

export default function CollectionsPage() {
  return (
    <section className={styles.section}>
      <h2>Now</h2>
      {pieces.map(([name, cloth, state]) => (
        <div key={name} className={styles.row}>
          <div>
            <p>{name}</p>
            <p className={styles.note}>{cloth}</p>
          </div>
          <p className={styles.note}>{state}</p>
        </div>
      ))}
    </section>
  );
}
