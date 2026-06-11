import styles from "./EventProgress.module.css";

export default function EventProgress() {
  return (
    <div className={styles.card} id="progress">
      <h3 className={styles.title}>Why Waste Sorting Matters</h3>
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Reduce Landfill Waste</span>
            <p className={styles.infoDesc}>
              Proper sorting diverts up to 80% of waste from landfills, reducing harmful methane emissions and soil contamination.
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.infoIcon} data-color="secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Recyclable Recovery</span>
            <p className={styles.infoDesc}>
              Materials like plastic, glass, aluminum, and paper can be recycled into new products, conserving natural resources.
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.infoIcon} data-color="amber">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 22l1-1h3l9-9" />
              <path d="M15.5 2.5a2.12 2.12 0 013 3L6 18l-4 1 1-4L15.5 2.5z" />
            </svg>
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Smart Classification</span>
            <p className={styles.infoDesc}>
              AI-powered detection identifies waste types in real time, ensuring each item reaches the right processing stream.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
