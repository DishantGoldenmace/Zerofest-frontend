import { Detection } from "@/types/detection";
import styles from "./DetectionTable.module.css";

interface DetectionTableProps {
  detections: Detection[];
}

function getClassificationStyle(classification: string): string {
  const key = classification.toLowerCase();
  const map: Record<string, string> = {
    plastic: styles.plastic,
    paper: styles.paper,
    aluminum: styles.aluminum,
    glass: styles.glass,
    organic: styles.organic,
    metal: styles.metal,
  };
  return map[key] || styles.other;
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatConfidence(value?: number): string {
  if (value === undefined || value === null) return "—";
  return `${(value * 100).toFixed(0)}%`;
}

export default function DetectionTable({ detections }: DetectionTableProps) {
  const hasMetadata = detections.some(
    (d) => d.decisionConfidence !== undefined || d.deviceId !== undefined
  );

  return (
    <div className={styles.wrapper} id="detection-table">
      <h2 className={styles.sectionTitle}>Recent Detections</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Classification</th>
              <th>Weight</th>
              {hasMetadata && <th>Confidence</th>}
              {hasMetadata && <th>Device</th>}
            </tr>
          </thead>
          <tbody>
            {detections.map((d) => (
              <tr key={d._id}>
                <td>
                  <span className={styles.time}>{formatTime(d.createdAt)}</span>
                </td>
                <td>
                  <span
                    className={`${styles.classificationBadge} ${getClassificationStyle(d.classification)}`}
                  >
                    {d.classification}
                  </span>
                </td>
                <td>
                  <span className={styles.weight}>{d.weight}</span>
                  <span className={styles.weightUnit}>gr</span>
                </td>
                {hasMetadata && (
                  <td>
                    <span className={styles.confidence}>
                      {formatConfidence(d.decisionConfidence)}
                    </span>
                  </td>
                )}
                {hasMetadata && (
                  <td>
                    <span className={styles.deviceId}>
                      {d.deviceId || "—"}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
