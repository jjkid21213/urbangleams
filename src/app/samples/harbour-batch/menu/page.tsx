import styles from "../hb.module.css";

const items = [
  ["Batch brew", "4.5", "Changes. Ask. We will not do six milks."],
  ["Egg on fold", "12", "Soft egg, pickle, butter that tastes like butter."],
  ["Birch granola", "14", "Oats, yoghurt, whatever fruit made it."],
  ["Tomato toast", "11", "Only when tomatoes are worth it."],
];

export default function MenuPage() {
  return (
    <section className={styles.section}>
      <h2>Menu</h2>
      <p className={styles.lede}>Short. We stop cooking when the bread’s gone.</p>
      {items.map(([n, p, d]) => (
        <div key={n} className={styles.menuItem}>
          <div>
            <strong>{n}</strong>
            <p>{d}</p>
          </div>
          <span>{p}</span>
        </div>
      ))}
    </section>
  );
}
