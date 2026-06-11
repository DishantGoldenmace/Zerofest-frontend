import styles from "./EmptyState.module.css";

export default function EmptyState() {
  return (
    <div className={styles.empty} id="empty-state">
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>📡</span>
      </div>
      <h2 className={styles.title}>
        Waiting for waste detections
        <span className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </span>
      </h2>
      <p className={styles.description}>
        Detections will appear here once the IoT devices start sending data.
      </p>
    </div>
  );
}
