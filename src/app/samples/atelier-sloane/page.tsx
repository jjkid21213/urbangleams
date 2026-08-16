import Link from "next/link";
import styles from "./as.module.css";
import { IconCoat, IconDress, IconShirt } from "./icons";
import { Lookbook, SloaneFaq } from "./ui";

export default function SloaneHome() {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>The coat, the dress, the shirt.</h1>
          <p className={styles.note}>
            One collection a season. Cut in Collingwood. Tried on in a small room in Fitzroy. No countdown clocks. No
            twenty-drop calendar.
          </p>
          <Link href="/samples/atelier-sloane/collections" className={styles.btn}>
            This season
          </Link>
        </div>
        <div className={styles.garment}>
          <IconCoat />
        </div>
      </section>
      <div className={styles.strip}>
        <article className={styles.piece}>
          <IconCoat />
          <div>
            <h2>The coat</h2>
            <p>Unlined wool. Pockets for a book.</p>
          </div>
        </article>
        <article className={styles.piece}>
          <IconDress />
          <div>
            <h2>The dress</h2>
            <p>One length. Two colours.</p>
          </div>
        </article>
        <article className={styles.piece}>
          <IconShirt />
          <div>
            <h2>The shirt</h2>
            <p>Heavy linen. Don’t panic-wash it.</p>
          </div>
        </article>
      </div>
      <section className={styles.section}>
        <h2>Look closer</h2>
        <p className={styles.note}>Tabs switch the piece. A real shop would hold photographs. This sample draws the garment.</p>
        <Lookbook />
      </section>
      <section className={styles.section}>
        <h2>Questions we actually get</h2>
        <SloaneFaq />
      </section>
    </>
  );
}
