import styles from "./ImpactStats.module.css";

export default function ImpactStats() {
  return (
    <div className={styles.grid} id="impact">
      {/* Waste Diverted */}
      <div className={styles.darkCard}>
        <svg className={styles.icon} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L12 14l4 4 5-12-4 2z" />
          <path d="M11 2a2 2 0 00-2 2v1" />
        </svg>
        <span className={styles.darkValue}>85%</span>
        <span className={styles.darkLabel}>Waste Diverted</span>
      </div>

      {/* CO2 Saved */}
      <div className={styles.lightCard}>
        <svg className={styles.co2Icon} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
        <span className={styles.lightValue}>1.2 Tons</span>
        <span className={styles.lightLabel}>CO&#8322; Saved</span>
      </div>

      {/* Recyclable Processing Rate */}
      <div className={styles.wideCard}>
        <div className={styles.wideLeft}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
          </svg>
          <span className={styles.wideValue}>92%</span>
          <span className={styles.wideLabel}>Recyclable Materials Processing Rate</span>
        </div>
        <svg className={styles.sparkline} width="80" height="32" viewBox="0 0 80 32">
          <polyline
            points="0,28 10,24 20,20 30,22 40,16 50,12 60,14 70,8 80,4"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,28 10,24 20,20 30,22 40,16 50,12 60,14 70,8 80,4 80,32 0,32"
            fill="rgba(5,150,105,0.08)"
            stroke="none"
          />
        </svg>
      </div>
    </div>
  );
}
