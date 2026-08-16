import { BatchShell } from "../BatchShell";
import styles from "../batch.module.css";

const items = [
  ["Batch brew", "4.5", "Changing. Ask. We will not do six alternative milks."],
  ["Egg on fold", "12", "Soft egg, pickles, butter that actually tastes like butter."],
  ["Birch granola", "14", "Toasted oats, yoghurt, whatever fruit survived the morning."],
  ["Tomato toast", "11", "Only when tomatoes are worth it. Otherwise it is not on."],
  ["Kids toast", "5", "One slice. Vegemite or jam. No unicorn dust."],
];

export default function MenuPage() {
  return (
    <BatchShell>
      <div className={styles.page}>
        <h1>Menu</h1>
        <p className={styles.lede}>Short on purpose. We cook what we can do well before 2pm.</p>
        {items.map(([n, p, d]) => (
          <div key={n} className={styles.menuRow}>
            <div>
              <strong>{n}</strong>
              <p>{d}</p>
            </div>
            <span>{p}</span>
          </div>
        ))}
      </div>
    </BatchShell>
  );
}
