import Link from "next/link";
import styles from "./hb.module.css";
import { IconBike, IconCup, IconRiver, IconSteam, IconToast } from "./icons";
import { HarbourFaq, HoursWidget, MenuBoard } from "./ui";

export default function HarbourBatchHome() {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <p className={styles.hand}>Howard Smith Wharves · Brisbane</p>
          <h1>Coffee for people who still look at the river.</h1>
          <p className={styles.lede}>
            We roast on the wharf. The first batch is for us. The second is the one we pour. If you need a table for a
            two-hour standup, this is not that room.
          </p>
          <Link href="/samples/harbour-batch/menu" className={styles.btn}>
            <IconCup style={{ width: 18, height: 18 }} />
            Today’s board
          </Link>
          <Link href="/samples/harbour-batch/visit" className={styles.btnGhost}>
            How to find us
          </Link>
        </div>
        <div className={styles.art} aria-hidden>
          <div className={styles.swatch}>
            <IconRiver />
            <strong>River light</strong>
            <span>Two seats. First come.</span>
          </div>
          <div className={styles.swatch}>
            <IconSteam />
            <strong>Second batch</strong>
            <span>That’s the pour</span>
          </div>
          <div className={styles.swatch}>
            <IconToast />
            <strong>Short kitchen</strong>
            <span>Until the bread’s gone</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <HoursWidget />
          <div className={styles.card}>
            <p className={styles.iconRow}>
              <IconBike />
              <strong>How it runs</strong>
            </p>
            <p className={styles.lede} style={{ marginTop: "0.7rem" }}>
              Prams fit. Dogs stay on the deck. No bookings for coffee. Catering is office boxes, not a wedding.
            </p>
            <Link href="/samples/harbour-batch/catering" className={styles.btnGhost} style={{ marginLeft: 0 }}>
              Office boxes
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>A short board</h2>
        <p className={styles.lede}>Coffee, a few plates, weekend extras. Tap a tab.</p>
        <div style={{ marginTop: "1rem" }}>
          <MenuBoard />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Colour, not stock photos</h2>
        <p className={styles.lede}>A real job would hold your own pictures. This sample uses fields so the layout still reads.</p>
        <div className={styles.gallery}>
          <figure style={{ background: "#b5522a" }}>
            <IconCup style={{ width: 36, height: 36 }} />
            <figcaption>Machine</figcaption>
          </figure>
          <figure style={{ background: "#3f5c4c" }}>
            <IconRiver style={{ width: 36, height: 36 }} />
            <figcaption>Wharf</figcaption>
          </figure>
          <figure style={{ background: "#6b3a28" }}>
            <IconToast style={{ width: 36, height: 36 }} />
            <figcaption>Kitchen</figcaption>
          </figure>
          <figure style={{ background: "#d4a05a", color: "#2a1810" }}>
            <IconSteam style={{ width: 36, height: 36 }} />
            <figcaption>Steam</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Before you come</h2>
        <HarbourFaq />
      </section>
    </>
  );
}
