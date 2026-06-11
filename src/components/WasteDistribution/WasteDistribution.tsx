import { DistributionEntry } from "@/types/detection";
import styles from "./WasteDistribution.module.css";

interface WasteDistributionProps {
  distribution: DistributionEntry[];
  totalCount: number;
}

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export default function WasteDistribution({
  distribution,
  totalCount,
}: WasteDistributionProps) {
  // Build SVG donut segments
  const size = 160;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;
  const segments = distribution.map((entry, i) => {
    const offset = circumference * (1 - cumulativePercent / 100);
    const length = circumference * (entry.percentage / 100);
    cumulativePercent += entry.percentage;

    return {
      ...entry,
      color: CHART_COLORS[i % CHART_COLORS.length],
      dashArray: `${length} ${circumference - length}`,
      dashOffset: offset,
    };
  });

  const displayCount =
    totalCount >= 1000 ? `${(totalCount / 1000).toFixed(1)}k` : String(totalCount);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Waste Distribution</h3>

      <div className={styles.chartWrapper}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className={styles.chart}
        >
          {segments.map((seg, i) => (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={seg.dashArray}
              strokeDashoffset={seg.dashOffset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          ))}
        </svg>
        <div className={styles.centerLabel}>
          <span className={styles.centerCount}>{displayCount}</span>
          <span className={styles.centerUnit}>Items</span>
        </div>
      </div>

      <div className={styles.legend}>
        {distribution.map((entry, i) => (
          <div key={entry.classification} className={styles.legendItem}>
            <span
              className={styles.legendDot}
              style={{ background: CHART_COLORS[i % CHART_COLORS.length] }}
            />
            <span className={styles.legendLabel}>{entry.classification}</span>
            <span className={styles.legendPercent}>{entry.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
