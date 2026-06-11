import { Detection } from "@/types/detection";
import styles from "./LatestDetection.module.css";

interface LatestDetectionProps {
  detection: Detection;
  totalCount: number;
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

function formatConfidence(value?: number): string {
  if (value === undefined || value === null) return "n/a";
  return `${(value * 100).toFixed(0)}%`;
}

export default function LatestDetection({
  detection,
  totalCount,
}: LatestDetectionProps) {
  const hasMetadata =
    detection.decisionConfidence !== undefined ||
    detection.deviceId !== undefined;

  return (
    <div className={styles.card} id="latest-detection">
      <div className={styles.cardHeader}>
        <span className={styles.cardTitle}>Latest Detection</span>
        <span className={styles.liveIndicator}>
          <span className={styles.liveDot} />
          Live
        </span>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Counting</div>
          <div className={styles.statValue}>
            {totalCount}
            <span className={styles.statUnit}>
              {totalCount === 1 ? "Item" : "Items"}
            </span>
          </div>
        </div>

        <div className={styles.stat}>
          <div className={styles.statLabel}>Classification</div>
          <div>
            <span
              className={`${styles.classificationBadge} ${getClassificationStyle(detection.classification)}`}
            >
              {detection.classification}
            </span>
          </div>
        </div>

        <div className={styles.stat}>
          <div className={styles.statLabel}>Weight</div>
          <div className={styles.statValue}>
            {detection.weight}
            <span className={styles.statUnit}>gr</span>
          </div>
        </div>
      </div>

      {hasMetadata && (
        <div className={styles.metadata}>
          {detection.deviceId && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Device</span>
              <span className={styles.metaValue}>{detection.deviceId}</span>
            </div>
          )}
          {detection.decisionConfidence !== undefined && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Confidence</span>
              <span className={styles.metaValue}>
                {formatConfidence(detection.decisionConfidence)}
              </span>
            </div>
          )}
          {detection.localConfidence !== undefined && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Local Conf.</span>
              <span className={styles.metaValue}>
                {formatConfidence(detection.localConfidence)}
              </span>
            </div>
          )}
          {detection.cloudInference !== undefined && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Cloud Inference</span>
              <span
                className={`${styles.metaBadge} ${detection.cloudInference ? styles.metaBadgeActive : styles.metaBadgeInactive}`}
              >
                {detection.cloudInference ? "Yes" : "No"}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
