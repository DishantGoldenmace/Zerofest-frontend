import styles from "./EventProgress.module.css";

interface ProgressBar {
  label: string;
  goal: string;
  percentage: number;
  color: string;
}

const progressData: ProgressBar[] = [
  { label: "Waste Goal", goal: "1,000 kg", percentage: 82, color: "var(--primary-container)" },
  { label: "Recycling Target", goal: "95%", percentage: 92, color: "var(--secondary)" },
  { label: "Participant Target", goal: "1,000", percentage: 85, color: "#d97706" },
];

export default function EventProgress() {
  return (
    <div className={styles.card} id="progress">
      <h3 className={styles.title}>Event Progress</h3>
      <div className={styles.bars}>
        {progressData.map((item) => (
          <div key={item.label} className={styles.barGroup}>
            <div className={styles.barHeader}>
              <span className={styles.barLabel}>
                {item.label}{" "}
                <span className={styles.barGoal}>({item.goal})</span>
              </span>
              <span className={styles.barPercent}>{item.percentage}%</span>
            </div>
            <div className={styles.track}>
              <div
                className={styles.fill}
                style={{
                  width: `${item.percentage}%`,
                  background: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
