import styles from "./MomentsGallery.module.css";

const moments = [
  { src: "/moment-volunteers.png", caption: "Volunteers in Action" },
  { src: "/moment-sorting.png", caption: "Smart Sorting Tech" },
  { src: "/moment-crowd.png", caption: "Community Impact" },
];

export default function MomentsGallery() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Moments from ZeroFest</h2>
      <div className={styles.grid}>
        {moments.map((m) => (
          <div key={m.src} className={styles.tile}>
            <img
              src={m.src}
              alt={m.caption}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <span className={styles.caption}>{m.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
