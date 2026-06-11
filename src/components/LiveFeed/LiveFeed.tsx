import { Detection } from "@/types/detection";
import styles from "./LiveFeed.module.css";

interface LiveFeedProps {
  detections: Detection[];
}

const CLASS_COLORS: Record<string, string> = {
  plastic: "var(--color-plastic)",
  paper: "var(--color-paper)",
  aluminum: "var(--color-aluminum)",
  glass: "var(--color-glass)",
  organic: "var(--color-organic)",
  metal: "var(--color-metal)",
};

function timeAgo(dateString: string): string {
  const diff = Date.now() - new Date(dateString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} min${mins > 1 ? "s" : ""} ago`;
  const hours = Math.floor(mins / 60);
  return `${hours}h ago`;
}

export default function LiveFeed({ detections }: LiveFeedProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--outline)" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <h3 className={styles.title}>Live Feed</h3>
      </div>

      <div className={styles.list}>
        {detections.slice(0, 6).map((d) => (
          <div key={d._id} className={styles.item}>
            <span
              className={styles.dot}
              style={{ background: CLASS_COLORS[d.classification] || "var(--color-other)" }}
            />
            <span className={styles.itemName}>
              {d.classification.charAt(0).toUpperCase() + d.classification.slice(1)}
              {" "}&bull;{" "}{d.weight}g
            </span>
            <span className={styles.time}>
              {timeAgo(d.createdAt)}
            </span>
          </div>
        ))}
        {detections.length === 0 && (
          <p className={styles.empty}>Waiting for detections…</p>
        )}
      </div>
    </div>
  );
}
